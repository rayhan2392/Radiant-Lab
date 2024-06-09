import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const AllBanner = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: banners = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners");
      return res.data;
    },
  });

  const handleSelectBanner = (banner) => {
    console.log(banner._id);
    axiosSecure.patch(`/banners/${banner._id}`).then((res) => {
      console.log(res.data);
      refetch();
      if (isPending) {
        return (
          <div>
            <span className="loading loading-spinner mx-auto loading-lg"></span>
          </div>
        );
      }
    });
  };

  const handleDeleteBanner =(banner)=>{
    console.log(banner._id)
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this banner",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/banners/${banner._id}`)
            .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount>0){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Banner deleted successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
                }
               
            })
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });
  }

  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-center">
          All Banners: {banners.length}{" "}
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Select Banner</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner) => (
              <tr key={banner._id}>
                <th>{banner.name} </th>
                <td>{banner.title} </td>
                <td>
                  {banner.isActive === true ? (
                    <>
                      <button className="btn  bg-[#80B9AD] text-white">
                        Selected
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleSelectBanner(banner)}
                      className="btn  "
                    >
                      select
                    </button>
                  )}
                </td>
                <td>
                  {banner.isActive === true ? (
                    <>
                      <button disabled className="btn">
                        <AiFillDelete className="text-xl"></AiFillDelete>
                      </button>
                    </>
                  ) : (
                    <>
                     <button onClick={()=>{handleDeleteBanner(banner)}} className="btn">
                   <AiFillDelete className="text-xl text-red-800"></AiFillDelete>
                  </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBanner;

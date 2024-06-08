import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllBanner = () => {
    const axiosSecure = useAxiosSecure();
    const {data:banners=[],refetch,isPending}=useQuery({
        queryKey:['banners'],
        queryFn:async()=>{
          const res = await axiosSecure.get('/banners')
          return res.data;
        }
    })
    
    const handleSelectBanner=(banner)=>{
        console.log(banner._id)
        axiosSecure.patch(`/banners/${banner._id}`)
        .then(res=>{
            console.log(res.data)
            refetch();
            if(isPending){
                return (
                    <div><span className="loading loading-spinner mx-auto loading-lg"></span></div>
                )
            }
        })
    }
  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-center">All Banners: {banners.length} </h1>
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
         {
            banners.map(banner=> <tr key={banner._id}>
                <th>{banner.name} </th>
                <td>{banner.title} </td>
                <td>
                {
                    banner.isActive === true?
                    <><button  className="btn  bg-[#80B9AD] text-white">Selected</button></>
                    :
                <button onClick={()=>handleSelectBanner(banner)} className="btn  ">select</button>
                }
               </td>
                <td>X</td>
              </tr>)
         }          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBanner;

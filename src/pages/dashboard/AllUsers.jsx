import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
 
  return (
    <div className="md:mt-10 ">
      <h1 className="text-2xl text-center font-bold ">
        Total Users :{users.length}{" "}
      </h1>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>See info</th>
              <th>Role</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th> {user.name} </th>
                <td>
                  {/* a modal to show user details */}
                  <button
                    className="btn btn-xs"
                    onClick={() =>
                      document.getElementById(`modal_${user._id}`).showModal()
                    }
                  >
                    See info
                  </button>
                  <dialog
                    id={`modal_${user._id}`}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box space-y-3">
                      <h3 className="font-bold ml-3 text-lg">{user.name}</h3>
                      <p className="font-bold">Blood Group : {user.bloodGroup} </p>
                      <p className="font-bold ">
                         District : {user.district}
                      </p>
                      <p className="font-bold ">
                         Upazilla : {user.upazilla}
                      </p>
                      <p className="font-bold ">
                         Email : {user.email}
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
                <td>
                  <button className="btn btn-xs">Make Admin</button>
                </td>
                <td>{user?.status}</td>
                <td>
                  <button className="btn btn-xs">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

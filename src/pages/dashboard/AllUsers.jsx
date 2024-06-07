const AllUsers = () => {
    
  return (
    <div className="md:mt-10 ">
      <h1 className="text-2xl text-center font-bold ">This is all user section welcome here</h1>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>See info</th>
              <th>Role</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

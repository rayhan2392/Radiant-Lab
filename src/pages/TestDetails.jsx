
const TestDetails = () => {
    return (
        <div className="md:flex justify-evenly items-center mt-8 bg-[#6A8CAF] md:p-12">
            <div className="flex-1">
                 <img className=" w-[400px] rounded-xl" src="https://i.ibb.co/S7myD3t/18774.jpg" alt="" />
            </div>
            <div className="text-white space-y-5 flex-1">
                 <h1 className="text-3xl font-bold">Blood circulation Test</h1>
                 <p className="text-2xl font-bold ">Date :</p>
                 <p className="text-xl font-bold">Available Slots :</p>
                 <p className="text-xl">Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptatum ea eligendi eius natus molestias dolor animi quasi, repudiandae aliquam?</p>
                 <button className="btn btn-block">Book Now</button>
            </div>
        </div>
    );
};

export default TestDetails;
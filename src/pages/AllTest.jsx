import img1 from "../assets/images/BloodCount.jpg";
import useAxiosPublic from "../hooks/useAxiosPublic";
const AllTest = () => {
   const axiosPublic = useAxiosPublic();
  //  const {data:tests=[]}=use
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:p-5 p-2 rounded-xl bg-[#6A8CAF] ">
        <div>
          <img className="rounded-xl " src={img1} alt="" />
        </div>
        <div className="text-[#E7D9EA]">
          <h1 className="font-bold text-2xl text-center">Complete Blood Count (CBC)</h1>
          <p> <span className="font-bold text-xl">Slots</span>: <span className="text-white text-xl">30</span> </p>
          <p><span className="font-bold text-xl ">Date</span> : <span className="text-white text-xl">24-11-2024</span></p>
          <p>
            A comprehensive test to analyze the components of your
            blood and detect various disorders.{" "}
          </p>
          <button className="btn mt-3 text-xl w-full">Details</button>
        </div>
      </div>
      <div className="md:p-5 rounded-xl bg-[#6A8CAF] md:flex">
        <div>
          <img className="rounded-xl" src={img1} alt="" />
        </div>
        <div>
          <h1>Complete Blood Count (CBC)</h1>
          <p>slots 30</p>
          <p>Date : 24-11-2024</p>
          <p>
            Description: A comprehensive test to analyze the components of your
            blood and detect various disorders.{" "}
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllTest;

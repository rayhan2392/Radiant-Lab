import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Banner = () => {
  const axiosSecure = useAxiosSecure();
  const { data: banners = [],isPending,refetch } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners");
      return res.data;
    },
  });
  if(isPending){
    refetch()
    return <span className="loading loading-spinner text-error"></span>

  }
  console.log(banners)
  const selectedBanner = banners.find((banner) => banner.isActive === true);
  console.log(selectedBanner);
 
  return (
    <div
      className="hero  h-[500px] space-y-4"
      style={{
        backgroundImage: `url(${selectedBanner.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-[#C5FF95]  text-4xl font-bold">
            {selectedBanner.title}!!!
          </h1>
          <p className="mb-5 font-bold text-[#5DEBD7]">
            {selectedBanner.description} <br /> Join us today!
          </p>
          <p className="text-2xl font-bold text-[#C5FF95]">
            Use Coupon Code{" "}
            <span className="text-[#40A578]">{selectedBanner.coupon}</span> to
            get
          </p>
          <h1 className="text-3xl font-bold ">{selectedBanner.rate} off</h1>
         <Link to='/allTests'>
         <button className="btn bg-[#9DDE8B] border-none text-white  mt-4">
            All Test
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

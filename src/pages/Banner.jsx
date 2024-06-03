
// const img = 'https://i.ibb.co/D7Jx6Q7/kae-ng-jy-Ncew0-Nf-W0-unsplash-1.jpg'
const Banner = () => {

  return (
    <div
      className="hero  h-[500px] space-y-4"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/D7Jx6Q7/kae-ng-jy-Ncew0-Nf-W0-unsplash-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-[#C5FF95]  text-4xl font-bold">Exclusive Offer!!!</h1>
          <p className="mb-5 font-bold text-[#5DEBD7]">
           New users get an exclusive discount. <br /> Join us today!
          </p>
          <p className="text-2xl font-bold text-[#C5FF95]">Use Coupon Code <span className="text-[#40A578]">NEWUSER25</span> to get</p>
          <h1 className="text-3xl font-bold ">25% off</h1>
          <button className="btn bg-[#9DDE8B]  mt-4">All Test</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

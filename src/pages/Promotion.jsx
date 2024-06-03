
const Promotion = () => {
    return (
        <div className="my-8 space-y-3 md:p-20 bg-[#5DEBD7]">
            <h1 className="text-center text-[#074173] font-bold text-3xl">Are you struggling to find where to get best diagnosis services?</h1>
            <p className="font-bold text-2xl text-center text-[#1679AB]">No problem. <span className="font-black">RadiantLab is there to serve you!!! </span></p>
            <p className="font-bold text-center text-[#1679AB] text-3xl">Enjoy 30% flat off for booking your first Test!!</p>
            <p className="font-bold text-center text-3xl my-3">What you will get?</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-[#C5FF95] p-3 rounded-xl">
                      <h1 className="font-bold text-xl text-[#1679AB]">
                        Comprehensive Test Menu
                      </h1>
                      <p>
                      Offering a wide range of diagnostic tests, from routine blood work to advanced imaging, ensuring accurate and timely diagnoses.
                      </p>
                  </div>
                  <div className="bg-[#C5FF95] p-3 rounded-xl">
                      <h1 className="font-bold text-xl text-[#1679AB]">
                      State-of-the-Art Equipment
                      </h1>
                      <p>
                      Utilizing the latest technology and equipment for precise and reliable test results.
                      </p>
                  </div>
                  <div className="bg-[#C5FF95] p-3 rounded-xl">
                      <h1 className="font-bold text-xl text-[#1679AB]">
                      Highly Skilled Professionals
                      </h1>
                      <p>
                      Staffed by experienced and certified medical professionals who ensure the highest quality of care.
                      </p>
                  </div>
                  <div className="bg-[#C5FF95] p-3 rounded-xl">
                      <h1 className="font-bold text-xl text-[#1679AB]">
                      Quick Turnaround Times
                      </h1>
                      <p>
                      Providing fast and efficient test processing to deliver results promptly and reduce patient wait times.
                      </p>
                  </div>
                 
            </div>
            <h1 className="text-center text-3xl font-bold">So, what are you waiting for??</h1>
        </div>
    );
};

export default Promotion;
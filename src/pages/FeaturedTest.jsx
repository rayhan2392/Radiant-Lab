import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from '../assets/images/BloodCount.jpg'
import slide2 from '../assets/images/hb1.jpeg'
import slide3 from '../assets/images/Lipid-Profile-Screening.jpg'
import slide4 from '../assets/images/Thyroid.jpg'
const FeaturedTest = () => {
  
  return (
    <div>
    <div>
        <h1 className="text-center mb-5 text-[#9DDE8B] font-bold mt-8 text-3xl">Featured Test</h1>
    </div>
      <Swiper
       
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img className="rounded-lg w-full h-[300px]" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="rounded-lg w-full h-[300px]" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="rounded-lg w-full h-[300px]" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="rounded-lg w-full h-[300px]" src={slide4} alt="" />
        </SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          
        </div>
      </Swiper>
    </div>
  );
};

export default FeaturedTest;

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <Slider {...settings} className='banner-scroll'>    
            <div className={`bg-[url('../Images/Banner.png')] bg-no-repeat bg-cover bg-center h-[700px]`}>

                <div className='p-[70px]'>
                    <h1 className='font-Mulish font-semibold text-[48px] text-[#fff] mb-[18px]'>Discover Timeless Jewellery <br /> Crafted to Perfection <span className='inline-block'><img src="../Images/Bannertext.png" alt="" /></span></h1>
                    <p className='font-Mulish font-semibold text-[20px] text-[#fff] mb-[45px]'>Explore our curated collection of gold and diamond masterpieces <br />designed to celebrate every moment.</p>

                    <div className='flex flex-col gap-[15px]'>
                        <div className='w-[207px] h-[40px] bg-[#fff] text-center flex items-center justify-center gap-2 rounded-[5px]'><a href="#" className='font-Mulish text-[18px] font-light text-[#000] '>Explore Now</a></div>
                        <div className='w-[240px] h-[40px] bg-[#fff] text-center flex items-center justify-center gap-2 rounded-[5px]'><a href="#" className='font-Mulish text-[18px] font-light text-[#000] '>Book an Appointment</a></div>
                    </div>
                </div>

            </div>

            <div className={`bg-[url('../Images/Banner.png')] bg-no-repeat bg-cover bg-center h-[700px]`}>

                <div className='p-[70px]'>
                    <h1 className='font-Mulish font-semibold text-[48px] text-[#fff] mb-[18px]'>Discover Timeless Jewellery <br /> Crafted to Perfection <span className='inline-block'><img src="../Images/Bannertext.png" alt="" /></span></h1>
                    <p className='font-Mulish font-semibold text-[20px] text-[#fff] mb-[45px]'>Explore our curated collection of gold and diamond masterpieces <br />designed to celebrate every moment.</p>

                    <div className='flex flex-col gap-[15px]'>
                        <div className='w-[207px] h-[40px] bg-[#fff] text-center flex items-center justify-center gap-2 rounded-[5px]'><a href="#" className='font-Mulish text-[18px] font-light text-[#000] '>Explore Now</a></div>
                        <div className='w-[240px] h-[40px] bg-[#fff] text-center flex items-center justify-center gap-2 rounded-[5px]'><a href="#" className='font-Mulish text-[18px] font-light text-[#000] '>Book an Appointment</a></div>
                    </div>
                </div>

            </div>

            <div className={`bg-[url('../Images/Banner.png')] bg-no-repeat bg-cover bg-center h-[700px]`}>

                <div className='p-[70px]'>
                    <h1 className='font-Mulish font-semibold text-[48px] text-[#fff] mb-[18px]'>Discover Timeless Jewellery <br /> Crafted to Perfection <span className='inline-block'><img src="../Images/Bannertext.png" alt="" /></span></h1>
                    <p className='font-Mulish font-semibold text-[20px] text-[#fff] mb-[45px]'>Explore our curated collection of gold and diamond masterpieces <br />designed to celebrate every moment.</p>

                    <div className='flex flex-col gap-[15px]'>
                        <div className='w-[207px] h-[40px] bg-[#fff] text-center flex items-center justify-center gap-2 rounded-[5px]'><a href="#" className='font-Mulish text-[18px] font-light text-[#000] '>Explore Now</a></div>
                        <div className='w-[240px] h-[40px] bg-[#fff] text-center flex items-center justify-center gap-2 rounded-[5px]'><a href="#" className='font-Mulish text-[18px] font-light text-[#000] '>Book an Appointment</a></div>
                    </div>
                </div>

            </div>
        </Slider>
    )
}

export default Banner;
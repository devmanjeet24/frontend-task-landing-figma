import React from 'react'

const Aboutus = () => {
    return (
        <div className='mt-[100px]'>

            <div className='w-full mx-auto flex items-center justify-between'>
                <div className="w-[1440px] flex items-center justify-between mx-auto bg-[#0C0F35]">
                    <div className='w-[40%] p-[30px]'>
                        {/* <img src="../../Images/About.png" alt="About" className='w-[632px] h-[535px]'/> */}
                        <img src="../../Images/About.png" alt="About" className='p-[]'/>
                    </div>


                    <div className='p-[60px] w-[60%]'>
                        <h4 className='font-Mulish font-bold text-[45px] text-[#fff] leading-[40px] mb-[35px]'>ABOUT US</h4>

                        <p className='font-Mulish font-normal text-[20pxpx] text-[#fff] leading-[30px] mb-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae et leo duis. </p>

                        <p className='font-Mulish font-normal text-[20pxpx] text-[#fff] leading-[30px]'>
                            Elementum sagittis vitae et leo duis. Libero nunc consequat interdum varius. Habitant morbi tristique senectus et netus et malesuada fames ac.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Aboutus;
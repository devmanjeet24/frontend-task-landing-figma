import React from 'react'
import { Handlepickedata } from '../assets/Data/Handlepickeddata';

const Handlepicked = () => {
    return (
        <div className='mt-[100px]'>

            <div className='w-full mx-auto flex items-center justify-between'>
                <div className="w-[1440px] flex items-center justify-between mx-auto">
                    <div className='w-[90%] mx-auto'>

                        <div>
                            <h3 className='font-Mulish font-semibold text-[45px] text-center mb-[14px]'>Handpicked for You</h3>
                            <p className='font-Mulish font-normal text-[24px] text-center text-[#0C0F35B2]'>Discover the latest treasures crafted for elegance and everyday sparkle</p>
                        </div>

                        <div className='flex justify-between items-center mt-[30px]'>

                            {
                                Handlepickedata.map((index, id) => {
                                    return (

                                        <div className='w-[22.5%]' key={id} >
                                            <div className='relative flex justify-center'>
                                                <img src={index.img} alt="img" />
                                              {index.Badge && (<span className='absolute top-4 left-8 rounded-full border border-[#CACCDE66] bg-[#CACCDE66] px-4 py-2 text-white text-[12px]'>{index.Badge}</span>)}  
                                            </div>
                                            <h4 className='font-Mulish font-medium text-[24px] text-[#000] mt-[8px]'>{index.Name}</h4>
                                            <div className='flex gap-[8px] mt-[6px]'>
                                                <p className='font-Mulish font-semibold text-[16px] text-[#FFB013]'>{index.Aprice}</p>
                                              {index.Bprice && (<p className='font-Mulish font-light text-[14px] text-[#717171]'>{index.Bprice}</p>)}  
                                            </div>

                                        </div>
                                    )

                                })
                            }

                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Handlepicked;
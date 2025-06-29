import React from 'react'

const Explorestyle = () => {
    return (
        <div className='mt-[100px]'>

            <div className='w-full mx-auto flex items-center justify-between'>
                <div className="w-[1440px] flex items-center justify-between mx-auto">
                    <div className='w-[90%] mx-auto'>

                        <div>
                            <h3 className='font-Mulish font-semibold text-[45px] text-center mb-[14px]'>Explore by Style</h3>
                            <p className='font-Mulish font-normal text-[24px] text-center text-[#0C0F35B2]'>Find the perfect piece for every occasion – curated by category</p>
                        </div>



                        <div className='flex flex-col gap-[8px] mt-[30px]'>

                            <div className='flex justify-between gap-[8px]'>
                                <div className='w-[50%]'>
                                    <img src="../../Images/Explore1.png" alt="" />
                                </div>
                                <div className='w-[50%] flex justify-between gap-[8px]'>
                                    <img src="../../Images/Explore2.png" alt="" />
                                    <img src="../../Images/Explore3.png" alt="" />
                                </div>
                            </div>


                            <div className='flex justify-between gap-[8px]'>
                                <div className='w-[50%] flex justify-between gap-[8px]'>
                                    <img src="../../Images/Explore2.png" alt="" />
                                    <img src="../../Images/Explore3.png" alt="" />
                                </div>
                                <div className='w-[50%]'>
                                    <img src="../../Images/Explore1.png" alt="" />
                                </div>
                                
                            </div>

                        </div>


                        {/* <div className="grid grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
                      
                            <div className="col-span-1 row-span-1">
                                <img src="../../Images/Explore1.png" alt="jewelry" className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="col-span-1 row-span-1">
                                <img src="../../Images/Explore2.png" alt="jewelry" className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="col-span-1 row-span-1">
                                <img src="../../Images/Explore3.png" alt="jewelry" className="w-full h-full object-cover rounded" />
                            </div>

                   
                            <div className="col-span-1 row-span-1">
                                <img src="../../Images/Explore4.png" alt="jewelry" className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="col-span-1 row-span-1">
                                <img src="../../Images/Explore5.png" alt="jewelry" className="w-full h-full object-cover rounded" />
                            </div>
                           
                            <div className="col-span-3 sm:col-span-1 row-span-1">
                                <img src="../../Images/Explore6.png" alt="jewelry" className="w-full h-full object-cover rounded" />
                            </div>
                        </div> */}



                    </div>
                </div>
            </div>


        </div>
    )
}

export default Explorestyle;
import React from 'react'

const Sectionc = () => {
  return (
    <div className='w-[100%] h-[auto] flex justify-center p-[90px] bg-[#F9F9F9] mt-[60px]'>

          <div className='w-[1273px] h-[auto] flex justify-center flex-col items-center bg-[#FFFFFF] sm:p-[100px] pt-[90px] pb-[90px] pl-[450px] pr-[450px]'>

                 <div className='flex flex-col items-center font-normal p-[10px] mb-[50px] w-[auto]'>
                     <h3 className='sm:text-[36px] text-[32px] font-normal mb-[20px]'>Join the club and get the benefits</h3>
                    <p className='sm:w-[70%] w-[90%] h-[auto] text-[16px]'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                 </div>
                 <div>
                      <input type='text' placeholder='you@gmail.com' className='sm:w-[354px] w-[254px] h-[56px] text-slate-400 p-[9px] bg-[#F9F9F9]'/><span className='h-[56px] w-[118px] p-[16px] bg-[#2A254B] text-[16px] text-white'>Sign Up</span>
                 </div>
          </div>
    </div>
  )
}

export default Sectionc
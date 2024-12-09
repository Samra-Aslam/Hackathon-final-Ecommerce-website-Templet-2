import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { PiFolderSimpleMinus } from "react-icons/pi";
import { PiPlant } from "react-icons/pi";

const Sectionb = () => {
  return (
    <div className='h-[auto] w-[1440px] bg-[#FFFFFF] flex flex-col items-center justify-center p-[50px]'>
        <div className='h-[34px] w-[366px] font-light text-[24px] mb-[50px] '><h3>What makes our brand different</h3></div>

    <div className='h-[auto] w-[1440px] grid  2xl:grid-cols-4 md:grid-cols-2  grid-cols-1 2xl:p-[60px] pt-[60px] pb-[60px] pl-[300px] pr-[300px] place-items-center'>
          
          <div className='mb-[50px]'>
           <h3 className='text-[26px] mb-[6px]'><TbTruckDelivery /></h3>
           <div className='w-[199px] h-[28px] text-[21px] font-normal text-[Dark Primary] pb-[9px] mb-[8px] mt-[5px]'>Next day as standard</div>
           <div className='w-[270px] h-[48px] text-[20px] font-light text-[Dark Primary] pb-[8px]'>Order before 3pm and get your order the next day as standard</div>
           
          </div>

          <div className='mb-[60px]'>
           <h3 className='text-[26px] mb-[6px]'><IoCheckmarkDoneCircleOutline /></h3>
           <div className='w-[205px] h-[28px] text-[21px] font-normal text-[Dark Primary] pb-[9px] mb-[8px] mt-[5px]'>Made by true artisans</div>
           <div className='w-[270px] h-[48px] text-[20px] font-light text-[Dark Primary] pb-[8px]'>Handmade crafted goods made with real passion and craftmanship</div>
           
          </div>

          <div className='mb-[60px]'>
           <h3 className='text-[26px] mb-[6px]'><PiFolderSimpleMinus /></h3>
           <div className='w-[199px] h-[28px] text-[21px] font-normal text-[Dark Primary] pb-[9px] mb-[8px] mt-[5px]'>Unbeatable prices</div>
           <div className='w-[270px] h-[48px] text-[20px] font-light text-[Dark Primary] pb-[8px]'>For our materials and quality you won’t find better prices anywhere</div>
           
          </div>

          <div className='mb-[40px]'>
           <h3 className='text-[26px] mb-[6px]'><PiPlant /></h3>
           <div className='w-[199px] h-[28px] text-[21px] font-normal text-[Dark Primary] pb-[9px] mb-[8px] mt-[5px]'>Recycled packaging</div>
           <div className='w-[270px] h-[48px] text-[20px] font-light text-[Dark Primary] pb-[8px]'>We use 100% recycled packaging to ensure our footprint is manageable </div>
           
          </div>
      </div>
    </div>
  )
}

export default Sectionb
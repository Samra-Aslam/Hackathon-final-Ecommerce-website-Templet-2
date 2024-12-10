import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from 'next/link';

const Header = () => {
  return (
    <div >
      {/* upper div part */}
      <div className='w-[100%] h-[auto] flex justify-around pt-[20px] pb-[20px]'>
           <div className='text-[24px]'><CiSearch /></div>
           <div className='text-[24px] w-[65px] h-[30px] font-normal'>Avion</div>
           <div className='flex justify-between text-[24px]'><h3 className='mr-[10px]'><Link href='/cart'><IoCartOutline /></Link></h3><h3><MdOutlineAccountCircle /></h3></div>
      </div>
      <hr></hr>
      {/* lower part */}
      <div className='w-[100%] h-[auto] flex justify-center pt-[10px] pb-[10px]'>
          <div className='w-[675px] h-[22px] flex justify-around font-light sm:text-[16px] text-[14px]'>
               <h3>Plant pots</h3>
               <h3>Ceramics</h3>
               <h3>Tables</h3>
               <h3>Chairs</h3>
               <h3>Crockery</h3>
               <h3>Tableware</h3>
               <h3>Cutlery</h3>
          </div>
      </div>
    </div>
  )
}

export default Header

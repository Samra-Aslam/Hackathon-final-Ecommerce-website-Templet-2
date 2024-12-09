import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id='colum2' className='w-[100%] h-[auto] sm:p-[40px] pl-[10px] pt-[40px] pb-[40px] pr-[10px] bg-[#2A254B] '>
       <div className='w-[70%] h-[auto] grid place-items-center md:grid-cols-3 grid-cols-2 pt-[10px] lg:gap-4 gap-5 mb-[30px]'>

          <div className='w-[108px] h-[175px]  text-white font-light md:ml-[30px] mb-[30px]'>
            <Link href='/'><p className='mb-[4px] font-normal'>Menu</p></Link>
            <Link href='/'><p className='mb-[4px]'>New arrivals</p></Link>
            <Link href='/'><p className='mb-[4px]'>Best sellers</p></Link>
            <Link href='/'><p className='mb-[4px]'>Recently viewed</p></Link>
            <Link href='/'><p className='mb-[4px]'>Popular this week</p></Link>
            <Link href='/products'><p className='mb-[4px]'>All products</p></Link>
          </div>

          <div className='w-[84px] h-[206px] pt-[10px]  text-white font-light mb-[30px]'>
          <Link href='/products'><p className='mb-[4px] font-normal'>Categories</p></Link>
            <Link href='/products'><p className='mb-[4px]'>Crockery</p></Link>
            <Link href='/products'><p className='mb-[4px]'>Furniture</p></Link>
            <Link href='/products'><p className='mb-[4px]'>Homeware</p></Link>
            <Link href='/products'><p className='mb-[4px]'>Plant pots</p></Link>
            <Link href='/products'><p className='mb-[4px]'>Chairs</p></Link>
            <Link href='/products'><p className='mb-[4px]'>Crockery</p></Link>
          </div>

          <div className='w-[105px] h-[175px]  text-white font-light '>
            <Link href='/'><p className='mb-[4px] font-normal'>Our company</p></Link>
            <Link href='/about'><p className='mb-[4px]'>About us</p></Link>
            <Link href='/'><p className='mb-[4px]'>Vacancies</p></Link>
            <Link href='/about'><p className='mb-[4px]'>Contact us</p></Link>
            <Link href='/'><p className='mb-[4px]'>Privacy</p></Link>
            <Link href='/'><p className='mb-[4px]'>Returns policy</p></Link>
          </div>
       </div>

       {/* ============================================ */}
       <div className='w-[30%] h-[auto] flex flex-col justify-left pt-[20px] pl-[10px] text-white'>
             <div className='text-[16px] mb-[5px]'>Join our mailing list</div>
             <div className='flex'>
             <input type='text' placeholder='you@gmail.com' className='sm:w-[454px] w-[354px] h-[56px] text-slate-400 p-[9px] bg-slate-500'/><span className='h-[56px] w-[150px] p-[12px]  text-[14px] text-black bg-slate-200 font-light'>Sign Up</span>
             </div>
       </div>
    </div>
  )
}

export default Footer
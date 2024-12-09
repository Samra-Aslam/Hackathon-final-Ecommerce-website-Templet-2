import React from 'react'
import Link from 'next/link'

const Sectiona = () => {
  return (
    <div className='xl:w-[1440px]  h-[auto] text-white xl:pl-[100px] xl:pr-[100px] lg:pl-[250px] lg:pr-[250px] md:pl-[370px] md:pr-[370px] sm:pl-[420px] sm:pr-[420px] pl-[480px] pr-[480px] pt-[20px] pb-[40px] items-center'>
      <div className=' grid lg:grid-cols-2 grid-cols-1 bg-[#2A254B]'>
         {/* left part code */}
          <div className='h-[584px] w-[760px]  pt-[60px]  pb-[60px] pl-[40px] pr-[40px]'>
              <div className='sm:w-[513px]  h-[187px] '>
                   <div className=' sm:w-[513px] w-[400px]  h-[90px] xl:text-[32px] lg:text-[30px] sm:text-[29px] text-[26px] font-light'>The furniture brand for the future, with timeless designs</div>
                   <div className='w-[170px] h-[56px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] bg-[#F9F9F926] mt-[20px]'><div className='w-[106px] h-[24px] text-[16px] font-light'><Link href='/products'>View collection</Link></div></div>
              </div>
              <div className='xl:w-[84%] w-[60%] h-[130px] xl:h-[90px] mt-[200px] bg-[#2A254B] text-white sm:text-[14px] xl:text-[16px] font-light' >A new era in eco friendly furniture with Avelon, the French luxury retail brand
                     with nice fonts, tasteful colors and a beautiful way to display things digitally 
                     using modern web technologies.
                     </div>
        </div>

          {/* right part code */}

          <div className='h-[584px] ' id='image1'></div>
      </div>
    </div>
  )
}

export default Sectiona
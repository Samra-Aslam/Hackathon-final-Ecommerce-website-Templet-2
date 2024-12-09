import React from 'react'
import Link from 'next/link'

const Sectiond = () => {
  return (
    <div className='xl:w-[1440px]  h-[auto] text-black xl:pl-[100px] xl:pr-[100px] lg:pl-[250px] lg:pr-[250px] md:pl-[370px] md:pr-[370px] sm:pl-[420px] sm:pr-[420px] pl-[480px] pr-[480px] pt-[20px] pb-[40px] items-center'>
      <div className=' grid xl:grid-cols-2 grid-cols-1 '>
         {/* left part code */}
          <div className='h-[603px] w-[760px]  pt-[60px]  pb-[60px] pl-[50px] pr-[40px]'>
              <div className='sm:w-[536px]  h-[auto] mb-[110px]'>
                   <div className=' sm:w-[513px] w-[400px]  h-[90px]  xl:text-[26px] sm:text-[28px] text-[24px] font-normal mb-[24px]'>From a studio in London to a global brand with over 400 outlets</div>
                   <div className='xl:w-[84%] w-[60%] h-[130px] xl:h-[90px]   text-black sm:text-[14px] xl:text-[16px] font-light ' >When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/>
                   <br/>
                   Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                     </div>
                   </div>
                   <div className='w-[170px] h-[56px] p-[16px]  text-center bg-[#F9F9F9]'><div className='w-[106px] h-[24px] text-[16px] font-light'><Link href='/products'>View collection</Link></div>
              </div>
              
        </div>

          {/* right part code */}

          <div className='h-[603px] ' id='image7'></div>
      </div>
    </div>
  )
}

export default Sectiond
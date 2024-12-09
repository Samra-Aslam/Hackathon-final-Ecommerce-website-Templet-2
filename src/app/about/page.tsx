import React from 'react'
import Sectionb from '../components/Sectionb'
import Sectionc from '../components/Sectionc'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='w-[100%] h-[auto] flex justify-center items-center md:p-[90px] p-[40px]'>
         <div className='w-[704px] h-[auto] lg:text-[36px] md:text-[24px] text-[22px] font-light lg:mr-[80px] mr-[40px]'>A brand built on the love of craftmanship, quality and outstanding customer service</div>
         <div className='w-[192px] h-[56px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] font-light bg-[#F9F9F9] md:text-[16px] text-[14px]'><Link href='/products'>View our products</Link></div>
    </div>

     {/* section 2 part here */}


     <div id='about2' className='w-[100%] h-[auto] grid xl:grid-cols-2 grid-cols-1 place-items-center pt-[30px] pb-[40px]'>
      {/* text part */}

      <div className='md:w-[630px] w-[530px]  h-[478px] flex flex-col lg:p-[50px] p-[40px] bg-[#2A254B] text-white mr-[10px] mb-[10px]' >
        <div className='lg:w-[495px] w-[420px] h-[100px] mb-[80px]'>
          <div className='text-[32px] font-light w-[400] mb-[3px]'>It started with a small idea</div>
          <div className='xl:w-[495px] lg:w-[400px] w-[320px] h-[50px] text-[18px] font-light'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</div>
        </div>
        <div className='w-[170px] h-[56px] text-[16px] font-light bg-[#F9F9F926] pl-[32px] pr-[32px] pt-[16px] pb-[16px]'>View collection</div>

      </div>

      {/* image part */}
      <div id='image8' className='md:w-[630px] w-[530px]  h-[478px] mb-[10px]'>

      </div></div>


      {/* -------------------------------------------------- */}

      <div>
       <Sectionb/>
    </div>
    <div>
      <Sectionc/>
    </div>

     
    
        

    </>
  )
}

export default page
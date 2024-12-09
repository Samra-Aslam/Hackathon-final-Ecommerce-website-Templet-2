import React from 'react'
import Link from 'next/link'

const Popular = () => {
  return (
    <div id='item4' className=' w-[1440px] h-[auto] flex flex-col  justify-center items-center' >
    <div className='flex justify-left w-[100%]'> '>
        <div className='w-[330px] h-[45px] text-[32px] mb-[40px] font-thin text-left 2xl:ml-[0px] xl:ml-[90px] lg:ml-[220px] md:ml-[340px] ml-[500px] mt-[30px]' >Our popular products</div>
    </div>
    <div className='w-[1440px] h-[auto] grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-items-center p-[60px] gap-2' >

    <div className='2xl:ml-[200px] xl:ml-[320px] lg:ml-[520px] md:ml-[150px] sm:ml-[190px] flex flex-col h-[462px] 2xl:w-[630px] xl:w-[630px] lg:w-[630px] sm:w-[580px]  w-[420px] sm:mr-[200px] mr-[10px]'>
        <div id='image5' className='2xl:w-[630px] xl:w-[630px] lg:w-[630px] sm:w-[580px]  w-[420px] h-[375px]'></div>
        <div className='h-[63px] w-[209px]'>
        <h2 className='h-[28px] w-[209px] text-[20px] font-light'>The Poplar suede sofa</h2>
        <h3 className='h-[27px] w-[46px] text-[20px] font-light'>£980</h3>
        </div>
    </div>

    <div className=' flex flex-col h-[462px] w-[305px] 2xl:ml-[180px] xl:ml-[0px]'>
        <div id='image1' className='h-[375px] w-[305px] '>

        </div>
        <div className='h-[63px] w-[154px]'>
        <h2 className='h-[28px] w-[154px] text-[20px] font-light'>Rustic Vase Set</h2>
        <h3 className='h-[27px] w-[44px] text-[20px] font-light'>£155</h3></div>
    </div>

    <div className='flex flex-col h-[462px] w-[305px]   '>
        <div id='image6' className=' h-[375px] w-[305px] '></div>
        <div className='h-[63px] w-[154px]'>
        <h2 className='h-[28px] w-[154px] text-[20px] font-light'>The Silky Vase</h2>
        <h3 className='h-[27px] w-[44px] text-[20px] font-light'>£125</h3></div>
    </div>

    
    </div>
    <div className='flex justify-center w-[100%]'>
     <div className='w-[170px] h-[56px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] flex justify-center drop-shadow-sm border-2 border-gray-300 m-[10px] '>
        <button className='w-[106px] h-[24px] text-[16px] bg-[#F9F9F9] font-thin  '><Link href='/products'>View collection</Link></button>
        </div></div>
    
    </div>
  )
}

export default Popular
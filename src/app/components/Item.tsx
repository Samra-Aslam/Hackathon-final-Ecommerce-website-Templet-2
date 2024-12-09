import React from 'react'
import Link from 'next/link'



const Item = ( ) => {
  return (
<div id='item4' className=' w-[1440px] h-[auto]  pr-[20px] pt-[20px] pb-[20px] pl-[60px] flex flex-col items-center justify-center' >
    <div className='flex md:float-left  w-[100%]'>
        <div className='w-[217px] h-[39px] text-[32px] mb-[60px] font-thin text-left xl:ml-[50px] lg:ml-[190px] md:ml-[300px] ml-[450px] mt-[30px]'>New ceramics</div>
    </div>
    <div className=' 2xl:w-[1440px] h-[auto] 2xl:p-[40px] xl:p-[0px] grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 2xl:gap-2 gap-2 md:gap-8 lg:gap-8 mr-[30px]' >

    <div className=' flex flex-col w-[305px] h-[462px]  '>
        <div id='image0' className='w-[305px] h-[375px] '></div>
        <div className='w-[63px] h-[154px]'>
        <h2 className='h-[28px] w-[145px] text-[20px]'>The Dandy chair</h2>
        <h3 className='h-[28px] w-[145px] text-[20px]'>£250</h3></div>
    </div>

    <div className=' flex flex-col w-[305px] h-[460px]'>
        <div id='image2' className='w-[305px] h-[375px] '></div>
        <div className='w-[63px] h-[154px]'>
        <h2 className='h-[28px] w-[145px] text-[20px]'>Rustic Vase Set</h2>
        <h3 className='h-[28px] w-[145px] text-[20px]'>£155</h3></div>
    </div>

    <div className=' flex flex-col w-[305px] h-[460px] '>
        <div id='image3' className='w-[305px] h-[375px] '></div>
        <div className='w-[63px] h-[154px]'>
        <h2 className='h-[28px] w-[145px] text-[20px]'>The Silky Vase</h2>
        <h3 className='h-[28px] w-[145px] text-[20px]'>£125</h3></div>
    </div>

    <div className='flex flex-col w-[305px] h-[460px] '>
        <div id='image4' className='w-[305px] h-[375px] '></div>
        <div className='w-[63px] h-[154px]'>
        <h2 className='w-h-[28px] w-[145px] text-[20px]'>The Lucy Lamp</h2>
        <h3 className='w-h-[28px] w-[145px] text-[20px]'>£399</h3></div>
     </div>
    </div>
    <div className='w-[100%] flex justify-center'>
     <div className='w-[170px] h-[56px] pt-[16px] pb-[16px] pl-[32px] pr-[32px] flex justify-center drop-shadow-sm border-2 border-gray-300 m-[10px] '>
        <button className='w-[106px] h-[24px] text-[16px] bg-[#F9F9F9] font-thin  '><Link href='/products'>View collection</Link></button>
        </div></div>
    
    </div>
  )
}

export default Item
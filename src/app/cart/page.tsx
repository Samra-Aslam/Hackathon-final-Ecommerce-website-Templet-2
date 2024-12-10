import React from 'react'

const page = () => {
  return (
    <div className="w-[100%] flex flex-col items-center p-[60px]">

    <div className='w-[1440px] h-[auto] pt-[65px] pb-[65px] pl-[188px] pr-[188px]  flex flex-col items-center justify-center '>

       <h3 id='heading' className='w-[80%] h-[auto] text-left font-normal xl:text-[36px] text-[30px] mb-[80px] xl:pl-[5px] lg:pl-[40px] pl-[110px]'>Your shopping cart</h3>
             
             
             {/* sub nav bar here */}


       <div id='subar' className='w-[80%] h-[auto] flex justify-around text-[14px] font-light border-b-[1px] border-gray-200 p-[10px] mb-[30px]'>
             <h3 className=''>Product</h3>
             <h3 className=''>Quantity</h3>
             <h3 className=''>Total</h3>
             {/* sub nav bar end */}
       </div >


       {/* first item of cart */}

       <div id='itemscart' className='w-[80%] h-[auto] flex justify-around text-[14px] font-light mb-[10px]'>

        <h3 className=''>
        <h2  className='w-[309px] h-[134px] flex justify-around '>
                    <div id='image3' className='w-[109px] h-[134px]'></div>
                    <div className='w-[179px] h-[110px]'>
                        <h3 className='w-[150px] h-[28px] text-[20px] font-normal'>Graystone vase</h3>
                        <h3 className='w-[179px] h-[42px] text-[14px] font-light'>A timeless ceramic vase with a tri color grey glaze.</h3>
                        <h3 className='w-[29px] h-[24px] text-[16px] font-light'>£85</h3>
                        <h3 id='itemscart1' className='h-[6px] w-[22px] hidden'>1</h3>

                    </div>
        </h2>
        </h3>


        <h3 id='subar' className='h-[6px] w-[22px]'>1</h3>
        <h3 id='subar'>£85</h3>
    
       </div>

       {/* second item cart */}

       <div id='itemscart' className='w-[80%] h-[auto] flex justify-around text-[14px] font-light mb-[10px]'>

        
        <h3 className='w-[309px] h-[134px] flex justify-around '>
                    <div id='image15' className='w-[109px] h-[134px]'></div>
                    <div className='w-[179px] h-[110px]'>
                        <h3 className='w-[150px] h-[28px] text-[20px] font-normal'>Graystone vase</h3>
                        <h3 className='w-[179px] h-[42px] text-[14px] font-light'>A timeless ceramic vase with a tri color grey glaze.</h3>
                        <h3 className='w-[29px] h-[24px] text-[16px] font-light'>£125</h3>
                        <h3 id='itemscart1' className='h-[6px] w-[22px] hidden'>1</h3>

                    </div>
        
        </h3>


        <h3 id='subar' className='h-[6px] w-[22px]'>1</h3>
        <h3 id='subar'>£85</h3>
    
       </div>

       {/* lower part */}
       <div className='w-[80%] h-[auto] flex flex-col justify-around text-[14px] font-light mb-[10px] items-end md:mr-[190px] sm:mr-[290px] mr-[490px]'>
             <div className='w-[262px] h-[67px] flex flex-col justify-end mb-[20px]'>
                      <h3 className='w-[150px] h-[34px] font-light text-[22px] mb-[10px]'>Subtotal  <b className='font-medium text-[22px]'>£210</b></h3>
                      <h3 className='w-[282px]  font-light text-[14px]'>Taxes and shipping are calculated at checkout</h3>
             </div>

             <div className='w-[172px] h-[56px] bg-[#2A254B] pt-[16px] pb-[16px] pl-[32px] pr-[32px]'><p className='w-[108px] h-[24px] font-light text-[16px] text-white'>Go to checkout</p></div>
       </div>











    </div>
    </div>
  )
}

export default page
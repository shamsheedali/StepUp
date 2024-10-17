import React from 'react'
import nikeBannerImage from '../../../assets/images/homepage/nike banner.png'

const BannerSection = () => {
  return (
    <div className='flex justify-between items-center select-none h-[430px] w-full px-10 font-bold'>
      <div>
        <h1 className='text-5xl leading-[60px]'>JUST <br /> DO <br /> IT</h1>
        <p>If you have a body, you are an athlete</p>
      </div>
      <div className='relative flex justify-center items-center'>
        <h1 className='text-[300px] text-[#b5b7bb8c] tracking-[40px]'>NIKE</h1>
        <img src={nikeBannerImage} alt="Nike Banner Image" className='absolute rotate-[342deg] right-[210px] bottom-[14px] w-[543px]' />
      </div>
      <h1 className='text-3xl'>Nike Air Max <span className='text-gray-600'>90 LV8</span></h1>
    </div>
  )
}

export default BannerSection

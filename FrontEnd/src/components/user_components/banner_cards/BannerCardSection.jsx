import React from 'react'
import BannerCard from './BannerCard'

const BannerCardSection = () => {
  return (
    <div className=' flex w-full h-[148px] px-10 justify-between items-center'>
      <button className='btn bg-black text-white font-normal w-28'>More →</button>
      <div className='flex gap-5'>
        <BannerCard />
        <BannerCard />
        <BannerCard />
      </div>
    </div>
  )
}

export default BannerCardSection

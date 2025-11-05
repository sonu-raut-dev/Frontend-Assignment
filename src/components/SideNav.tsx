import Image from 'next/image'
import React from 'react'

const SideNav = () => {
  return (
    <div
        className='pt-4 px-4 h-full bg-white min-h-screen w-fit border-r border-[#DDDFE5] flex flex-col gap-6 items-center'
    >
        <Image 
            src={'/main-logo.png'}
            alt='Main-Logo'
            width={30}
            height={30}
        />
        <div className='flex flex-col gap-2 items-center'>
            <div className='p-2 bg-blue-50 hover:bg-gray-100 rounded-lg cursor-pointer transition'>
                <span className='ri-user-2-line text-xl text-gray-900' />
            </div>
            <div className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition'>
                <span className='ri-settings-3-line text-xl text-gray-900' />
            </div>
        </div>
    </div>
  )
}

export default SideNav
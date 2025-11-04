import { Ban } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Error = ({retry}:{retry:() => void}) => {
  return (
    <div className='flex items-center justify-center gap-4 flex-col'>
        <Ban size={72} className='text-gray-600'/>
        <span className='text-black font-semibold text-lg'>Failed to load users. Please try again.</span>
        <button onClick={retry} 
            className='py-2 px-3 bg-amber-600 cursor-pointer rounded-lg uppercase text-white font-semibold hover:bg-amber-700 transition'
        >
            Retry
        </button>
    </div>
  )
}

export default Error
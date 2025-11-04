import { TriangleAlert, Zap } from 'lucide-react'
import React from 'react'

const StatusChip = ({active} : {active: boolean}) => {
  if(active) {
    return (
      <div className="flex items-center gap-1">
        <Zap className={'text-blue-500 w-4 h-4 fill-current'} />
        <span className='text-[14px] font-semibold text-gray-600 leading-none'>Active</span>
      </div>
    )
  } else {
    return (
      <div className="flex items-end gap-1">
        <TriangleAlert className='text-gray-700 w-4 h-4' />
        <span className='text-[14px] font-semibold text-gray-600 leading-none'>Inactive</span>
      </div>
    )
  }
}

export default StatusChip
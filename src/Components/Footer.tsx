import { GlobeIcon } from '@heroicons/react/solid'
import React,{FC} from 'react'

const Footer:FC = () => {
  return (
    <div className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100'>
        <div className='px-8 py-3'>
            <p>India</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 grid-flow-row-dense px-8 py-3'>
            <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2'>
                <GlobeIcon className='h-5 mr-1 text-gray-700' /> Carbon natural since 2007
            </div>
            <div className='flex justify-center space-x-4 whitespace-nowrap md:justify-self-start '>
                <p>Advertising</p>
                <p>Bussines</p>
                <p>How search works</p>
            </div>

            <div className='flex justify-center space-x-4 md:ml-auto '>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
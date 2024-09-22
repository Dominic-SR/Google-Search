import React,{FC} from 'react'
import HeaderOption from './HeaderOption'
import { SearchIcon } from '@heroicons/react/solid'

interface Props{
    selected:string  
}

const HeaderOptions:FC<Props> = ({selected}) => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]'>
        <div className='flex space-x-6'>
            <HeaderOption 
            Icon={SearchIcon}
            title="All"
            selected={selected==="/search"} 
            link="/search"
            />
        </div>
    </div>
  )
}

export default HeaderOptions
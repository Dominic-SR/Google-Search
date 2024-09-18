import React from 'react'
import { ViewGridIcon } from "@heroicons/react/solid" 
import Avatar from '../Components/Avatar';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
            <div className='flex space-x-4 items-center'>
                <p className='link'>About</p>
                <p className='link'>Share</p>
            </div>

            <div className='flex space-x-4 items-center'>
                <p className='link'>Gmail</p>
                <p className='link'>Images</p>
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
                <Avatar 
            url="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=826&t=st=1726683354~exp=1726683954~hmac=ffbaaf6d3fb47ff60970bf5998fb1cfdfc4cac0cde3360a6cd4f043350c71511" className={''}                />
            </div>
        </header>    
    </div>
  )
}

export default Home;
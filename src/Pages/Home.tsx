import React from 'react'

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
            </div>
        </header>    
    </div>
  )
}

export default Home
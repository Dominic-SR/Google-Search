import React from 'react'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid" 
import Avatar from '../Components/Avatar';
import Footer from '../Components/Footer';

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

        <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            height={900}
            width={300}
            />

            <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
              <SearchIcon className='h-5 mr-3 text-gray-500' />
              
              <input 
                type='text'
                className='focus:outline-none flex-grow'
              />

              <MicrophoneIcon className='h-5' />

            </div>

            <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
                    <button className='btn'>Google Search</button>
                    <button className='btn'>I'am Feeling Lucky</button>
            </div>

        </form>
        <Footer />
    </div>
  )
}

export default Home;
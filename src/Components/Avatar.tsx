import React,{FC} from 'react'

interface props{
    url: string,
    className: string
}

const Avatar:FC<props> = ({url,className}) => {
  return (
    <img 
    loading='lazy'
    className={`h-10 rounded-full cursor-pointer transistion duration-150 transform hover:scale-110 ${className}`}
    src={url}
    />
  )
}

export default Avatar
import React,{useState,FC} from 'react'
import { useNavigate } from 'react-router-dom'
import { useResultContext } from '../Context/ResultContextProvider';

const Header:FC<Props> = ({selected}) => {
    const navigate = useNavigate();
    const {searchTerm, setSearchTerm} = useResultContext();
    const [text, setText] = useState<string>(searchTerm)
  return (
    <div>Header</div>
  )
}

export default Header
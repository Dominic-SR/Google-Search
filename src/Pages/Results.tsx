import React, { useState, useEffect } from 'react'
import { useResultContext } from '../Context/ResultContextProvider'
import { useLocation } from 'react-router-dom';

interface Results {

}

const Results = () => {
  const {results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation();
  const [selected, setSelected] = useState<string>()

  useEffect(()=>{
      if(searchTerm){
        if(location.pathname === "/videos"){
          setSelected(location.pathname)
          getResults(`/search?q=${searchTerm} videos`)
        }
        else{
          setSelected(location.pathname)
          getResults(`${location.pathname}?q=${searchTerm}&lr=en-US&num=40`)
        }
      }
  },[searchTerm, location.pathname])

  console.log(results);
  
  return (
    <div>Results</div>
  )
}

export default Results
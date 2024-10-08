import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from 'react'

interface ContextInterface{
    getResults:(data:string)=>void;
    results: object | any;
    searchTerm:string,
    setSearchTerm:Dispatch<SetStateAction<string>>
    isLoading: boolean
}

export const ResultContext = createContext<ContextInterface>({
    getResults:()=>{},
    results:[],
    searchTerm:"",
    setSearchTerm:()=>{},
    isLoading:false,
})

// const baseUrl = "https:google-search3.p.rapidapi.com/api/v1"
const baseUrl = "https://google-search72.p.rapidapi.com"

interface props{
    children:ReactNode
}

export const ResultContextProvider:FC<props> = ({ children }) =>{
  const [results, setResults] = useState<Object>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("")  

  const getResults = async(type:string)=>{
    setIsLoading(true);

    console.log("API",process.env.REACT_APP_API_KEY);
    

    const response = await fetch(`${baseUrl}${type}`,{
        method:'GET',
        headers:{
            "x-user-agent":"desktop",
            "x-proxy-location":"US",
            "x-rapidapi-host": "google-search72.p.rapidapi.com",
            "x-rapidapi-key":process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : "",
        }
    });

    const data = await response.json();
    if(type.includes("/news")){
        console.log("NEWS");
        
        setResults(data.entries)
    }else if(type.includes("/image")){
        console.log("IMAGE");
        setResults(data.image_results)
    }else{
        console.log("EMPTY");
        setResults(data.items)
    }
    // setIsLoading(false)
  }

  const sampleAppContext:ContextInterface | null ={
    getResults,
    results,
    searchTerm,
    setSearchTerm,
    isLoading
  }

  return(
    <ResultContext.Provider value={sampleAppContext}>
        {children}
    </ResultContext.Provider>
  )
} 

export const useResultContext = () => useContext(ResultContext)
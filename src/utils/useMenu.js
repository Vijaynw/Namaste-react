import { useEffect,useState } from "react";
import { MENU_URl } from "./constant";
const useMenu =(resId)=>{
    
    const [listofRes,setlistofres] = useState([]);

    useEffect(()=>{
        fetchData()
      },[]);

        const fetchData = async () => {
        const data = await fetch(MENU_URl+resId);
        const json = await data.json(); 
        setlistofres(json.data)
       
    
      };

    return listofRes
}

export default useMenu
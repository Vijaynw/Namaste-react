import { useEffect,useState } from "react";
import latlangObj from "../utils/latlang.json"
import { Link } from "react-router-dom";
// import Body from "./Body";
// import { useParams } from "react-router-dom";
// const {resId} = useParams()

const Main =()=>{
    
    const [latlang,setlatlang] = useState([]);
    // const [latlangSearch,setlatlangSearch] = useState("");
    // const [latlang2,setlatl2] = useState("");
    console.log("Function")
    useEffect(()=>{
        setlatlang(latlangObj)
        console.log("useEffect")
    },[])
    // console.log(latlang)
    
   
    console.log(latlang)
 return(

<div>
    <h1>Main</h1>

    <h1>Choose your city</h1>
    
                {/* <Body lat={latlang}/> */}


        {latlang.map((e)=>{

        // console.log(item.name)
    // <button  > {item.name}</button>
   return  (
   <Link key={e.name} to={"/body/"+ e.lat +"/" + e.lon}>
   <button className="m-5 p-2 border rounded-lg hover:bg-slate-300" >{e.name}</button>
   </Link>
   )
  })}

</div>
 
 )
}


export default Main
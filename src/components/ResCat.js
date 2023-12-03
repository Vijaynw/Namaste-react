import { useState } from "react"
import Catlist from "./Carlist"

const ResCat =({data})=>{
  
    const [show,setShow]=useState(false)
    const handle = ()=>{
        setShow(!show)
    }
    return(
        
        <div  className="w-6/12 mx-auto my-4 p-4 bg-gray-50 flex  justify-between" >
            <div onClick={handle} className="cursor-pointer">
            {/* <span>{data.infoCards.length}</span> */}
            <span className="font-bold">{data.card.card.title}({data.card.card.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {show && <Catlist items={data?.card?.card?.itemCards}/>}
        </div>
    )
}


export default ResCat
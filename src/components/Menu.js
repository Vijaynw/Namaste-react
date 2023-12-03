import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import { MENU_URl } from "../utils/constant";
import ResCat from "./ResCat";
//constroled 
const Menu = (props)=>{
    const [listofRes,setlistofres] = useState([]);
    const [listofRes1,setlistofres1] = useState([]);
    // const [listofRes1,setlistofres1] = useState([]);
    const {resId,resName} = useParams()
    const dummy="dummy"
    // console.log(resId)
    useEffect(()=>{
        fetchData()
      },[]);

        const fetchData = async () => {
        const data = await fetch(MENU_URl+resId);
        const json = await data.json(); 
        setlistofres(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
       setlistofres1(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
     // optional chaninig
      }
      // console.log(listofRes1)
      const catogery = listofRes1.filter(
        (c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      // console.log(catogery)
    // console.log(listofRes.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    return(
        <div className="">

        <h1 className="font-bold">Hello{resName}</h1>
        
            {catogery.map((item,index)=>{
                return( 
                    <ResCat key={item.card.card.id} data={item} show={index===0 && true} set/> 

                )
            })}
        </div>
    )
}

export default Menu
import {useSelector} from "react-redux"
import Catlist from "./Carlist"
import { removeItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
const Cart =()=>{
    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()
   
    const handleclear =()=>{
        dispatch(removeItem())
    }
    console.log("Vijay",cartItems)
    var Total =0
    console.log(Total)
    return(
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 flex flex-col justify-between">

        <h1>Cart</h1>
        <button onClick={handleclear} >clear</button>
        {
            cartItems.map((item)=>{
                Total+=(item.card.info.price)/100
            })
        }
        <Catlist items={cartItems} handler ={handleclear} />
       <button onClick={()=>{
            Total=Total-100
       }}>
        <h2>Apply Promo</h2>
        </button> 
        <h1>Total : ₹ {Total} /-</h1>
        </div>
        )
}

export default Cart
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
    return(
<div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 flex  justify-between">

        <h1>Cart</h1>
        <button onClick={handleclear} >clear</button>
        {/* {
            cartItems.map((item)=>{
                
            })
        } */}
        <Catlist items={cartItems} handler ={handleclear} />
        </div>
        )
}

export default Cart
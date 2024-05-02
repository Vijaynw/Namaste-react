import { addIteam } from "../utils/cartSlice";
import { CDN_URl } from "../utils/constant";
import { addIteam, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Catlist = ({ items, handler, id }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addIteam(item));
  };
  // const handleAd =()=>{
  //   dispatch(removeItem("pizza"))
  // }
  // console.log(handleAdd)
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex justify-between p-2 m-2 ">
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                Price
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="font-bold">{item.card.info.category}</p>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
            <img src={CDN_URl + item.card.info.imageId} alt="" />
            <button onClick={() => handleAdd(item)}>Add +</button>
            <label htmlFor="">Qty :</label>
            <button onClick={() => handler()}>Remove +</button>
            {/* <button onClick={handleAd}>Remove +</button> */}
          </div>
        </div>
      ))}
      {/* Item cards */}
    </div>
  );
};

export default Catlist;

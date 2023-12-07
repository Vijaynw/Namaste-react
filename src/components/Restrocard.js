import { useContext } from "react";
import { CDN_URl } from "../utils/constant";
import UserContext from "./UserContext";

export const Restrocard = (props) => {

const data = useContext(UserContext)
// console.log(data)
const {resData} = props;
// console.log(resData)
  return (
    <div data-testid="res-cards" className="ml-10 p-4 w-[350] h=[250] border" 
    /*style={styleCard}*/ >
      <img
        className="w-[250] h-[250]"
        src={CDN_URl+ resData.info.cloudinaryImageId}
        alt=""
      />
    
      <h3 className="font-bold">{resData.info.name}</h3>
      <h4 >{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.deliveryTime}</h4>
      <h4>{resData.info.areaName}</h4>
      <h4>{resData.info.locality}</h4>
      <h4>⭐{resData.info.avgRating}</h4>
      {/* <li>{data.loggedInuser}</li> */}
  
    </div>
  ); 
};

//HOC
export const withPromothedData = (Restrocard)=>{
  return(props)=>{
    return (
      <div>
        <label className="ml-10">Promoted</label>
        <Restrocard {...props}/>
      </div>
    )
  }
}

export default Restrocard; 
//use without {} while inporting
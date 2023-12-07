import {Restrocard,withPromothedData} from "./Restrocard";
import resObj from "../utils/mockdate";
import {useState,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOn from "../utils/useOn";
import UserContext from "./UserContext";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Header from "./Header";
const Body = ({latlang}) => {

  const [listofRes,setlistofres] = useState([]);
  const [listofRes1,setlistofres1] = useState([]);
  const [search,setSearch]=useState("")
  const {userId} = useParams()
  const location = useLocation();
  const lat = new URLSearchParams(location.search).get('lat');
  const lon = new URLSearchParams(location.search).get('lon');
  console.log(lat,lon)
  console.log(location)
  const RestroPromoted = withPromothedData(Restrocard)
  //conditional
 

  const fetchData = async () => {
    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat="+lat+"&lng="+lon+"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // setlistofres =json
    setlistofres(json.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    setlistofres1(json.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    
    // optional chaninig
  }
  const {setName,loggedInuser}= useContext(UserContext)

  useEffect(()=>{
    fetchData()
    // console.log("object")
  },[]);

  const onlineStatus = useOn()

  if(onlineStatus === true)

    return listofRes.length === 0 ? (
      <Shimmer />
    ) : (
      <>
      {/* <Header lat={lat} lon={lon}/> */}
      <div className="body">
        <div className="filter">
          <div className="flex item-center  border justify-center ">

          <input data-testid ="search"
            className="w-[350] m-[20] p-[10] border border-solid color rounded-[50]"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            />
         

          <button className="px-4 bg-gray-100 py-2 m-4 rounded-[50]"
            onClick={() => {
              const filterlist = listofRes1.filter((res) => {
                return res.info.name.toLowerCase().includes(search.toLowerCase());
              });
              setlistofres(filterlist);
            }}
            >
            Search
          </button>
          
          <button
            className="px-4 bg-gray-100 py-2 m-4 rounded-[50]"
            onClick={() => {
              const updated = listofRes1.filter(
                (res) => res.info.avgRating > 4
                );
                setlistofres(updated);
              }}
              >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 bg-green-100 py-2 m-4 rounded-[100]"
            onClick={() => {
              // myFunction();
              const updated = listofRes1.filter((res) => res.info.veg == true);
              setlistofres(updated)
            }}
            >
            {" "}
            Veg Restaurants
          </button>
          <button
            className="px-4 bg-red-100 py-2 m-4 rounded-[100]  "
            onClick={() => {
              // myFunction();
              alert("Work in progress")
              // const updated = listofRes1.filter((res) => res.info.veg == false);
              // setlistofres(updated)
            }}
            >
            {" "}
            Non-Veg Restaurants
          </button>

          {/* <input
            className="w-[350] m-[20] p-[10] border border-solid color rounded-[50]"
            type="text"
            placeholder="Hello, world"
            value={loggedInuser}
            onChange={(e) => {
              
              setName(e.target.value);
            }}
            /> */}
              </div>

          <div className="flex flex-wrap justify-center">

            {listofRes.map((res) => (
            <Link className=" break-words" key={res.info.id} to={"/resturant/"+ res.info.id +"/" + res.info.name} >
            {res.info.isOpen ?( <RestroPromoted  resData={res}/>):(
            <Restrocard resData={res}/>
           ) }
            </Link>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  };
  export default Body;
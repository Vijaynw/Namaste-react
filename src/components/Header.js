import { useEffect, useState, useContext } from "react";
import { LOGO_URl } from "../utils/constant";
import { Link } from "react-router-dom";
import useOn from "../utils/useOn";
import { useSelector } from "react-redux";
import UserContext from "./UserContext";
const Header = ({ lat, lon }) => {
  const [login, setLogin] = useState("Login");
  const cartItem = useSelector((store) => store.cart.items);

  useEffect(() => {
    // console.log("useEffect")
  }, []);

  const onlineStatus = useOn();
  const { loggedInuser } = useContext(UserContext);

  return (
    <div className=" flex  md:flex  justify-between items-center--bg-pink-100 shadow-lg --sm:bg-gray-200">
      <div>
        <img className="w-56" src={LOGO_URl} />
      </div>

      <div className="flex">
        <ul className="flex flex-wrap p-4 m-4 justify-center items-center">
          {/* <li className="px-4 bg-gray-100 py-2 m-4 rounded-[50] hover:bg-gray-100">
            Online Status : {onlineStatus ? "Online 🚀 " : "Offline🥴"}
          </li> */}
          <Link
            className="px-4 bg-gray-100 py-2 m-4 rounded-[50]"
            to={"/body/?lat=12.983333&lon=77.583333"}
          >
            {" "}
            <li>Home 🏡</li>
          </Link>
          <Link className=" px-4 bg-gray-100 py-2 m-4 rounded-[50]" to="/about">
            <li>About Us ❔</li>
          </Link>
          <Link
            className=" px-4 bg-gray-100 py-2 m-4 rounded-[50]"
            to={"/contact"}
          >
            {" "}
            <li>Contact us 📞</li>{" "}
          </Link>
          <Link
            className=" px-4 bg-gray-100 py-2 m-4 rounded-[50]"
            to={"/cart"}
          >
            {" "}
            <li> Cart {"(🛒" +cartItem.length+")"} </li>{" "}
          </Link>
          <button
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
            className="px-4 bg-gray-100 py-2 m-4 rounded-[50]"
          >
            {login }
          </button>
           <h1 className="px-4 bg-gray-100 py-2 m-4 rounded-[50]">Network Status :
            {onlineStatus ? "🟢" : "🔴"}
            </h1> 
          {/* <li>{loggedInuser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;

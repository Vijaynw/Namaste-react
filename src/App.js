import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Errors from "./components/Errors";
import Menu from "./components/Menu";
// import Contacts from "./components/Contacts";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/UserContext";
import {Provider } from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import UserContext from "./components/UserContext";
import Main from "./components/Main";
import { User } from "./components/User";
import { createContext } from "react";
//import error
const Contacts =lazy(()=>
  import("./components/Contacts")
)

export const Username = createContext({
  name: "viay"
})

const AppLayout = () => {

  const [userName,setName]= useState()

  useEffect(()=>{
    const data ={
  
      name :"Vijay"
    };

    setName(data.name)
  },[])

  return (
    <Provider store={appStore}>

      <UserContext.Provider value={{loggedInuser:"userName",setName}}>
    <Username.Provider value={"Vijay"}>

    <div className="app">

      <Header />
      <Outlet/>

    </div>
    </Username.Provider>

     </UserContext.Provider>

    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout/>,
  children:[
    {
    path: "/",
    element: <Main/>
    },
    {
      path:"/body",
      element:<Body />,
    },
    {
      path:"/body",
      element:<Body />,
    },
    {
      path: "/about",
      element:<About/>
      },
    {
      path: "/contact",
      element: <Suspense fallback={<h1>Hello</h1>}><Contacts/></Suspense>
      },
      {
      path: "/cart",
      element: <Cart/>
      },
      {
        path: "/resturant/:resId/:resName/:resArea/:avgRating",
        element: <Menu/>,
        },
      
      {
        path: "/user",
        element: <User/>,
        },
       
      
      {
        path: "/user",
        element: <User/>,
        }

  ], 
  errorElement : <Errors/>,  
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

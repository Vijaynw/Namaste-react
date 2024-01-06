import {User} from "./User"
import {UserClass} from "./User"
import UserContext from "./UserContext"

const About =()=>{
    return(
        <div className="">
        <h1 className="border flex justify-center mt-10 font-bold">Hello About</h1>
        {/* <User name="vijay from function component"/> */}
        <UserClass name="vijay"/>
        {/* <UserClass name="Alish"/> */}
        <UserContext.Consumer>
            {
             ({loggedInuser})=>(
                <h1>{loggedInuser}</h1>
             )

             
            }
            </UserContext.Consumer>    
  
        </div>
    )
}
export default About
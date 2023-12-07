import {User} from "./User"
import {UserClass} from "./User"
import UserContext from "./UserContext"

const About =()=>{
    return(
        <div className="about">
        <h1>Hello About</h1>z
        <User name="vijay from function component"/>
        <UserClass name="vijay"/>
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
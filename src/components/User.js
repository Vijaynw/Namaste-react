import {Component, useEffect} from "react"
import { USER_URl } from "../utils/constant"

export const User = (props)=>{
    const {name,location} = props
    // console.log("Function insoide")
    useEffect(()=>{
        // console.log("UseEffect called")
    //   const time = setInterval(() => {
    //     alert("Hello world")
    //     // console.log("Hello")
    //   }, 5000);

      return () => {
        // clearInterval(time)
        // console.log("Unmount")
      }
    })
// console.log("object")
    //usestate
    return(
        <div className="usercard">
            <h2>name : {name}</h2>
            <h2>loaction : Pune</h2>
            <h2>Contact</h2>
        </div>
    )
}

export class UserClass extends Component{

    constructor(props){
        // 1st called
        super(props)
        this.state = {
            count:0,
            userInfo:{}
        }
        console.log(this.state.name+" constructor")
    }

    async componentDidMount(){
        console.log(this.state.name + "Did Mount")
        //set intervar and clear in componentWillMount this.name =
        const data = await fetch(USER_URl)
        const json = await data.json()
        console.log("")
        this.setState({
            userInfo:json
        })
        //api call
}
    componentDidUpdate(prevProps){
        console.log(this.props.name+ "Component didUpdate")
    }
    componentWillUnmount(prevProps){
        console.log(this.props.name+  "Component willUnmount")
    }

    render(){
        console.log(this.props.name+ "render")
        // 2nd called
        // console.log(this.state.userInfo)
        const {name,location} = this.state.userInfo
        return (
            <div className="flex w-6/12 m-auto flex-col justify-center items-center">
                <div className="rounder-xl">

            <img className="w-100 object-contain " src={this.state.userInfo.avatar_url} alt="" />
                </div>

            <div className="flex flex-col border w-6/12">

            <h2 className="font-bold">Name : {this.props.name}</h2>
            <h2>loaction : {location}</h2>
            <h2>Contact</h2>
            
            </div>
            <h1 className="px-4 bg-gray-100 py-2 m-4 rounded-[50]">{this.state.count}</h1>

            <button className="px-4 bg-green-100 py-2 m-4 rounded-[50]" onClick={()=>{
                // 
                this.setState({
                    count: this.state.count +1
                })
            }}>click</button>
            <button className="px-4 bg-green-100 py-2 m-4 rounded-[50]" onClick={()=>{
                // 
                this.setState({
                    count: this.state.count = 0          
                })
            }}>Reset</button>
        </div>
        )
    }
}

// export default User
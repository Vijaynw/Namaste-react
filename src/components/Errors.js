import {useRouteError} from "react-router-dom"

const Errors = ()=>{
    const err =useRouteError()
    return(
        <div className="text-teal-800 text-5xl flex items-center justify-center h-[100vh]">
          Oops !! Someting went wrong {err.status}
        </div>
    )
}
export default Errors
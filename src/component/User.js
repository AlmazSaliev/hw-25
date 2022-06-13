import { useDispatch } from "react-redux"
import { uiActions } from "./store/uiSlice"
import './AllStyle.css'

export const User=()=>{
    let dispatch = useDispatch()
    function logout(){
        dispatch(uiActions.btn('Sing up'))
        dispatch(uiActions.gospinner())
        setTimeout(()=>{
            dispatch(uiActions.stopspinner());
            dispatch(uiActions.home())
        }, 4000)
    }
    return(
        <div className="user">
            <img src="http://memesmix.net/media/created/emkhjz.jpg" alt="foto"/>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
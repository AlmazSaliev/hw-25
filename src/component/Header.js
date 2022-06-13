import './AllStyle.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { uiActions } from './store/uiSlice'
export const Header=()=>{
    let dispatch = useDispatch()
    let store = useSelector(store=>store.ui.btnname)
    function bool(){
        if(store==='Sing up'){
           dispatch(uiActions.newspa()) 
        }else{
            dispatch(uiActions.user())
        }
        
    }
    function homespa(){
        dispatch(uiActions.home())
    }
    return <div className='header'>
        <img src="https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg" alt="logo"/>
        <div className='btn-header'>
            <button onClick={homespa}>Home</button>
            <button onClick={bool}>{store}</button>
        </div>
    </div>
}
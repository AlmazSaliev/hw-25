import { useState } from "react"
import { useDispatch } from "react-redux"
import { uiActions } from "./store/uiSlice"
import './AllStyle.css'

export const Input=()=>{
    let dispatch = useDispatch()
    let[value, setValue]=useState({
        email: '',
        password: '',
        proverkaEmail: false,
        proverkaPassword: false,
    })
    function onchange(e){
        let getvalue = e.target.value
        if(e.target.type==='email'){
            setValue({
                ...value,
                proverkaEmail: value.proverkaEmail = (/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(getvalue))
            })
        }
        if(e.target.type==='password'){
            setValue({
                ...value,
                proverkaPassword: value.proverkaPassword = getvalue.length > 6
            })
        }
        setValue({
            ...value,
            [e.target.type]: getvalue
        })
    }
    let btn = true
    if(value.proverkaEmail && value.proverkaPassword){
        btn=false
    }
    function submit(e){
        e.preventDefault()
        dispatch(uiActions.btn('User'))
        dispatch(uiActions.gospinner())
        setTimeout(()=>{
            dispatch(uiActions.stopspinner());
            dispatch(uiActions.home())
        }, 4000)

        setValue({
            email: '',
            password: '',
        })

    }
    return <form onSubmit={submit}>
        <h2>Registration</h2>
        <div className="form1">
            <label htmlFor="Gmail">Gmail</label>
            <input type='email' name="Gmail" onChange={onchange} value={value.email}/>
        </div>
        <div className="form1">
            <label htmlFor="Password">Password</label>
            <input type="password" name="Password" onChange={onchange} value={value.password}/>
        </div>
        <button disabled={btn}>Add</button>
    </form>
}
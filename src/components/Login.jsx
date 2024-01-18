import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";

function Login(){
    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')
    const {setUser} =useContext(UserContext)

    const handleSubmit=(e)=>{
        e,preventDefault()
        setUser({username,password})
    }
    return (
        <>
        <h2>LOGIN</h2>
        <input type="text"
        valaue={login}
        onChange={(e)=>setLogin(e.target.value)}
        placeholder="Username" />
        <input type="text"
        valaue={password}
        onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleSubmit}> Submit</button>
        </>
    )
}
export default Login
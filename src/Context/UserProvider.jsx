import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children}) =>{
    const [user,setUser]=useState(null);
    return (
        <UserContextProvider value={{user,setUser}}>
        {children}
        </UserContextProvider>
    )
}
export default UserContextProvider
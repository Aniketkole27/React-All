import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const { users, register } = useAuth();
const [newUser,setNewUser] = useState(users)
const useResister = (name, email, password) => {
   const user = {
        id:Date.now(),
        name,
        email,
        password
    }
   
    console.log("Aniket")
    register(()=>setNewUser([user,...users]))
    
    return prompt("Resistration Successfull !")
};

export default useResister

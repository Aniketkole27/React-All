import React,{useState} from 'react'
// import useResister from '../../hooks/resister';

function Resister() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const addUser = ()=>{
        console.log(username)
        // useResister(username,login,password)        
    }
  
    const handleSignIn = ()=>{
        e.peventDefault();
        addUser()
    }   
      
  
    return (
      <>
        <h2>Sign In</h2>
        <form onSubmit={() => handleSignIn}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={() => setUsername(e.target.value)}
              name="username"
              required
            />
          </div>
  
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={() => setEmail(e.target.value)}
              name="email"
              required
            />
          </div>
  
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={() => setPassword(e.target.value)}
              name="password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </>
    );
}
export default Resister

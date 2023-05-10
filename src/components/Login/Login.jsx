import { useRef } from "react"
import './Login.css'
const Login = () => {
   const email = useRef()
   const password = useRef()
   // const getEmail= localStorage.getItem("emailData")
   // const getPassword= localStorage.getItem("passwordData")

   const submitHandler = () => {
      if(email.current.value == "mujib@gmail.com" && password.current.value == "123") {
         localStorage.setItem("emailData", "mujib@gmail.com")
         localStorage.setItem("passwordData", "123")
      }
   }
   return(
      <div className="form-input">
         {
            // getEmail&&getPassword?
            // Navigate('/') :
         <form onSubmit={submitHandler}>
            <div>
               <label htmlFor="">email :</label>
               <input type="text" ref={email}/>
            </div>
            <div>
               <label htmlFor="">password :</label>
               <input type="password" ref={password}/>
            </div>
            <button className="btn-login">Login</button>
         </form>
        }
      </div>
   )
}

export default Login
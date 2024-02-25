import React from "react"
import "./register.scss"

const Login = () => {
  return (
    
          <div className="formcontainer">
            <div className="formwrapper">
              <span className="logo">Dashboard</span>
              <span className="title">Login</span>
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign in</button>
              </form>
              <p>You don't have an account? Register</p>
            </div>
          </div>    
  )
}

export default Login
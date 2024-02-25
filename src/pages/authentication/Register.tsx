import React from "react"
import "./register.scss"
import avatar from "../../assets/images/addAvatar.png"

const Register = () => {
  return (
    
          <div className="formcontainer">
            <div className="formwrapper">
              <span className="logo">Dashboard</span>
              <span className="title">Register</span>
              <form>
                <input type="text" placeholder="Display Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file">
                  <img src={avatar} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Register</button>
              </form>
              <p>Already have an account? Login</p>
            </div>
          </div>    
  )
}

export default Register
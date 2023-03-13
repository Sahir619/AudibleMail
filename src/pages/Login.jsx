import React from 'react'
import back from '../Components/back.png'
import Logo from '../Components/Logo.png'
export const Login = () => {
  return (
    <>
      <header className="head">
        <img className="logo" src={Logo} alt="logo"/>
        <h1 className="name">LOGIN</h1>
      </header>

      <div className='body'>
        <form className="form">
          <div className="content">
            <div className="email">
              <h2>EMAIL</h2>
              <input type="email" id="email" name="email"/>
            </div>
            <div className="pass">
              <h2>PASSWORD</h2>
              <input type="text" id="pass" name="password"/>
            </div>
          <input type="button" className="btn" value="LOG IN"/>
          </div>
        </form>
      </div>
</>

  )
}

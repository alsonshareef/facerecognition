import React from 'react'

const Navigation = ({onRouteChange, isLoggedIn}) => {
  if (isLoggedIn) {
    return (
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('logout')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
      </nav>
    )
  } else {
    return (
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('login')} className="f3 link dim black underline pa3 pointer">Sign in</p>
        <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
      </nav>
    )
  }
}

export default Navigation;

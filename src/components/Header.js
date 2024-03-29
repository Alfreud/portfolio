import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>web development and mobile app development</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Mobile app Development", "Google ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  )
}

export default Header

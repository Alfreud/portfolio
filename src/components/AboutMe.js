import React from "react";
import author from "../me.jpeg"

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello Im Alfredo. I have been developing websites and mobile applications for over 5 years. I'm Full-Stack Web
            Developer. Technologies I use is MERN(MongoDB, Express, ReactJS and NodeJS) for web and both Flutter and Kotlin
            for hybrid and native android mobile app development respectively.

            I create responsive websites that are displayed on all devices desktops and smartphones.

            After the website or mobile app is finished and ready to deploy and sell a product or service. It is essential
            that your potential clients know about you.

            I will create an advertising campaign for you in Google Adwords and Facebook!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

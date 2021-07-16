import React from 'react'

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
      <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Apr 2021 - Currently</h3>
            <p>
              Android development, develop of software for payment terminals that have like operating system Android 10, so the
              development is about to create the app for process the payments with all kind of cards (AMEX, master card, etc.) 
            </p>
          </div>
        </div>
      <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Dic 2020 - Mar 2021</h3>
            <p>
              Android development, develop an application for stimating the position af an employee in real time, the app sends 
              the location of the device constantly (30 min) to an host. 
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jan 2018 - Nov 2020</h3>
            <p>
              Android development, applications from scratch using the most modern technologies, like MVVM architectural pattern
              and Android Jetpack components like Navigation, Room, Paging3, WorkManager, Coroutines, Retrofit etc. 
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jan 2016 - Jan 2018</h3>
            <p>
              Web development, HTML5, CSS3, Javascript, Bootstrap, React. Web and mobile app development for a particle detector
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

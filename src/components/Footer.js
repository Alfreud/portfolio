import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Mexico Main st 2020 office #4</p>
            </div>
            <div className="d-flex">
              <a href="tel:+52 55-12-49-17-19">+52 55-12-49-17-19</a>
            </div>
            <div className="d-flex">
              <p>alfred007ga@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/alfredo.gregorioaldana/"}
                quote={"Android Developer"}
                hashtag="#kotlin"
              >
                <FacebookIcon className="mx-3" size={36}/>
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.facebook.com/alfredo.gregorioaldana/"}
                quote={"Android Developer"}
                hashtag="#kotlin"
              >
                <TwitterIcon className="mx-3" size={36}/>
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.facebook.com/alfredo.gregorioaldana/"}
                quote={"Android Developer"}
                hashtag="#kotlin"
              >
                <RedditIcon className="mx-3" size={36}/>
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.facebook.com/alfredo.gregorioaldana/"}
                quote={"Android Developer"}
                hashtag="#kotlin"
              >
                <LinkedinIcon className="mx-3" size={36}/>
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

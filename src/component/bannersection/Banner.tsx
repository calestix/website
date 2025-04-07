"use client"
import React, { useEffect, useState } from "react";
import "./style.scss";

const Banner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <div className="banner">
      {videoLoaded && (
        <video autoPlay muted loop className="background-video">
          <source src="/video/homepage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="overlay">
        <h1 className="mt-28">Turn Your Business Dream into  Reality<br /> <span> With the Best Solutions.</span></h1>
        <div className="one line mt-16"></div>
        <div className="two line"></div>
        <div className="three line"></div>
        <div className="four line"></div>
        <div className="five line"></div>
        <div className="six line"></div>
        <div className="seven line"></div>
        <div className="eight line"></div>
        <div className="nine line"></div>
        <div className="ten line"></div>
        <div className="eleven line"></div>
        <div className="tweleve line"></div>
      </div>
    </div>
  );
};

export default Banner;

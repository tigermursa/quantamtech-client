import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerSection.css";
const BannerSection = () => {
  // slider settings ...
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center flex-col items-center banner-photo fi">
      <div className="md:flex flex-col sm:flex-row justify-between gap-36 mt-10  md:mt-60 mb-36 p-16">
        <div>
          <div className="text-start">
            <p className="btn  rounded-full bg-white bg-opacity-20 text-white border-none ">
              CREATIVE AGENCY
            </p>
            <p className="font-bold text-lg md:text-xl  mt-5 mb-5 text-white">
              Quantum Tech A Step Towards Digital
            </p>
            <h1 className="font-bold text-2xl  md:text-4xl text-white">
              We Build, Grow and Manage Your Brand and <br></br>Business.
            </h1>
            <p className="font-semibold mt-5 mb-10 text-white">
              The best solution for your business and scale up to success in
              digital business
            </p>
            <button className="btn btn-wide rounded-full bg-white text-blue-800  font-bold">
              Contact Us{" "}
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-96 rounded-xl mt-10 md:mt0 "
            src="/76496-web-development-animation.gif"
            alt=""
          />
        </div>
        <div className="hidden">
          {" "}
          <Slider {...settings} className="slider">
            <div>
              {" "}
              <img
                className="md:w-48  border-2 bg-white"
                src="https://www.kotharitech.com/wp-content/uploads/2022/08/CopperGate-Logo_EuPmtCoHj.png"
                alt=""
              />
            </div>
            <div>
              {" "}
              <img
                className="md:w-48  border-2 bg-white"
                src="https://www.kotharitech.com/wp-content/uploads/2022/08/Gogrej-Logo_s86RIxmwm.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="md:w-48  border-2  bg-white"
                src="https://www.kotharitech.com/wp-content/uploads/2022/08/Amalfi-logo_Q-scblCo-.png"
                alt=""
              />
            </div>

            <div>
              <img
                className="md:w-48   border-2  bg-white"
                src="https://www.kotharitech.com/wp-content/uploads/2022/08/BhartiyaWebSeries-Logo_QA5L4vq-Xy.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="md:w-48   border-2  bg-white"
                src="https://www.kotharitech.com/wp-content/uploads/2022/08/MiltonSteel-Logo_vcEcoo7q4.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

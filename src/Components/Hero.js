import React from "react";
import Navbar from "./Navbar";
import Cube from "../Assets/HeroPage/intro-cube 1.svg";
import Phone from "../Assets/HeroPage/intro-phone 1.svg";
import Pillar from "../Assets/HeroPage/intro-pillar 1.svg";
import Cube2 from "../Assets/HeroPage/intro-cubes 2.svg";
import Stairs from "../Assets/HeroPage/intro-stairs 1.svg";

const Hero = () => {
  return (
    <div className="h-[680px] overflow-hidden lg:h-[750px] w-[100%] back bg-black">
      <Navbar />
      <div className="z-0 flex justify-center items-center h-[100%] relative w-[100%]">
        <div className="h-[40px] w-[40px] md:w-[60px] md:h-[80px] lg:h-[97.76px] lg:w-[76.87px] absolute top-0 left-[100px] lg:left-[200px]">
          <img className="w-[100%] h-[100%] " src={Cube} alt="Cube"></img>
        </div>
        <div className="absolute w-[500px] top-[140px] md:top-[80px] text-center h-[400px]">
          <div className="relative flex justify-center">
            <p className="absolute tracking-[15px] lg:tracking-[30px] z-[-1] text-[70px] md:text-[150px] lg:text-[193px] font-extrabold text-white">
              CASH
            </p>
            <div className="z-10 lg:pr-6 w-[200px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[370px] lg:h-[450px]">
              <img src={Phone} alt="Phone"></img>
            </div>
            <p className="z-20 absolute text-[70px] top-[100px] md:top-[130px] lg:top-[170px] md:text-[150px] lg:text-[193px] font-extrabold text-white">
              APP
            </p>
          </div>
        </div>
        <div className="absolute w-[100] h-[150px]  right-[10px] lg:h-[260.9px] lg:w-[200px] top-[10px] lg:right-[70px] md:w-[190px] md:h-[220px] md:top-[-20px] md:right-[50px]">
          <img className="w-[100%] h-[100%]" src={Stairs} alt="Stairs" />
        </div>
        <div className="lg:w-[280px] lg:h-[290px] md:w-[280px] md:h-[300px] w-[170px] h-[250px] absolute bottom-[100px] md:bottom-[45px] md:right-[80px]  right-[10px]">
          <img className="h-[100%] w-[100%] " src={Pillar} alt="Pillar"></img>
        </div>
        <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] md:bottom-[190px] md:left-[90px] bottom-[200px] left-[30px] lg:w-[188px] lg:h-[176] absolute lg:bottom-[200px] lg:left-[100px]">
          <img className="h-[100%] w-[100%]" src={Cube2} alt="Cube 2"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;

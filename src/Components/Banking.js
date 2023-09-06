import React from "react";
import Mobile from "../Assets/BankingPage/banking-phone.png";
import Hole from "../Assets/BankingPage/banking-hole.svg";
import Bank1 from "../Assets/BankingPage/banking-track-2.svg";
import Bank from "../Assets/BankingPage/banking-track-1.svg";
import Ramp from "../Assets/BankingPage/banking-ramp-1.svg";
import Stairs from "../Assets/BankingPage/banking-stairs-1.svg";
import Cubes from "../Assets/BankingPage/banking-cubes.svg";
import Monster from "../Assets/BankingPage/banking-monster.svg";
import Ramp1 from "../Assets/BankingPage/banking-ramp-2.svg";
import Stairs1 from "../Assets/BankingPage/banking-stairs-2.svg";
import Tube from "../Assets/BankingPage/banking-tube.svg";
import Pillar from "../Assets/BankingPage/banking-column.svg";
const Banking = () => {
  return (
    <div className="h-[750px] bg-green relative overflow-hidden">
      <div className="absolute top-[280px] md:top-[280px] md:w-[200px] md:left-[120px] lg:top-[280px] lg:left-[180px] left-[30px] flex flex-col gap-2 h-auto w-[120px] xl:w-[320px] lg:w-[270px]">
        <div className="flex flex-start">
          <h1 className="text-white font-black md:text-[35px] text-[20px] text">
            Banking
          </h1>
        </div>
        <div>
          <p className="text-start md:text-[15px] xl:text-[20px] text-[10px]">
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </p>
        </div>
      </div>
      <div className="absolute z-20 w-[150px] xl:left-[500px] md:z-20 md:w-[300px] md:top-[180px] md:h-[350px] md:left-[270px] h-[200px] top-[220px] left-[150px] lg:left-[400px]">
        <img src={Mobile} alt="Mobile" />
      </div>
      <div className="absolute top-[-20px] xl:w-[400px] xl:h-[200px]  md:w-[300px] md:top-0 md:left-[0px] w-[200px] h-[150px]">
        <img src={Hole} alt="Hole" />
      </div>
      <div className="absolute bottom-[-95px] md:bottom-[-110px] md:h-[155px] md:w-[320px] right-[10px] w-[200px] h-[150px] lg:right-[140px]">
        <img src={Hole} alt="Hole" />
      </div>
      <div className="absolute right-[0px] md:w-[200px]  md:right-[80px] top-[5px] w-[100px] h-[150px] lg:w-[250px]">
        <img src={Bank1} alt="Bank" />
      </div>
      <div className="absolute left-[100px] z-10 top-[180px] xl:left-[350px] xl:top-[160px] md:left-[180px] md:z-10 md:top-[150px] md:w-[200px] md:right-[80px] w-[100px] h-[150px] lg:w-[250px] lg:top-[140px] lg:left-[240px]">
        <img src={Bank} alt="Bank" />
      </div>
      <div className=" absolute w-[110px] md:w-[220px] xl:right-[200px] md:right-[120px] md:top-[230px] h-[120px] top-[100px] right-[100px] lg:w-[260px] lg:h-[150px]">
        <img src={Ramp} alt="Ramp " />
      </div>
      <div className=" absolute w-[110px] md:h-[200px] h-[120px] top-[300px] right-[0px] lg:w-[150px] lg:h-[220px]">
        <img src={Stairs} alt="Stairs" />
      </div>
      <div className=" absolute w-[110px] xl:w-[300px] xl:right-[200px] md:w-[200px] h-[120px] bottom-[140px] right-[140px] lg:w-[250px] lg:h-[170px]">
        <img src={Cubes} alt="Cubes" />
      </div>
      <div className=" absolute w-[80px] md:w-[100px] md:bottom-[50px] h-[120px] bottom-[70px] right-[30px] lg:w-[210px] lg:h-[90px]">
        <img src={Monster} alt="Monster" />
      </div>
      <div className=" absolute w-[110px] xl:w-[260px] md:w-[200px] xl:left-[250px] md:bottom-[120px]  md:left-[90px] h-[120px] bottom-[250px] left-[80px] lg:w-[260px] lg:h-[150px] lg:left-[140px]">
        <img src={Ramp1} alt="Ramp1" />
      </div>
      <div className=" absolute w-[110px] md:h-[200px] xl:w-[200px] xl:h-[280px] xl:left-[0px] md:left-[20px] md:bottom-[130px] h-[120px] bottom-[170px] left-[-30px] lg:w-[150px] lg:h-[220px]">
        <img src={Stairs1} alt="Stairs1" />
      </div>
      <div className=" absolute w-[100px] md:w-[130px] xl:left-[480px] md:left-[280px] h-[220px] bottom-[-50px] left-[10px] lg:w-[180px] lg:h-[180px] lg:bottom-[-20px]">
        <img src={Tube} alt="Tube" />
      </div>
      <div className=" absolute w-[100px] xl:w-[200px] xl:h-[200px] xl:top-[100px] h-[220px] top-[40px] left-[0px]">
        <img src={Pillar} alt="Pillar" />
      </div>
    </div>
  );
};

export default Banking;

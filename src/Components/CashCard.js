import React from "react";
import Stairs from "../Assets/CashPage/boost-stairs-1.svg";
import Phone from "../Assets/CashPage/boost-phone.svg";
import Burger from "../Assets/CashPage/boost-burger.svg";
import Card from "../Assets/CashPage/boost-card.svg";
import Hand from "../Assets/CashPage/boost-hand.svg";
import Shoe from "../Assets/CashPage/boost-shoe.svg";
import Coffee from "../Assets/CashPage/boost-coffee.png";
import Stairs1 from "../Assets/CashPage/boost-stairs-2.png";

const CashCard = () => {
  return (
    <div className="relative h-[400px] md:h-[650px] xl:h-[750px] bg-black overflow-hidden">
      <div className="absolute md:top-[220px] top-[130px] lg:top-[250px] lg:left-[250px] md:left-[40px] left-[20px] flex flex-col gap-2 h-auto md:w-[200px] w-[120px] lg:left-[130px] lg:w-[300px] xl:w-[350px]">
        <div className="flex flex-start">
          <h1 className="text-[#00D54B] font-black md:text-[35px] text-[20px] text">
            Cash Card
            <br /> & Boost
          </h1>
        </div>
        <div>
          <p className="text-start text-white md:text-[14px] xl:text-[20px] text-[10px]">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
      </div>
      <div className="absolute w-[300px] md:w-[700px] xl:w-[850px] xl:h-[750px] h-[600px] bottom-[-170px] md:bottom-[-40px] md:right-[-70px] right-[-30px]">
        <img src={Stairs} alt="Stairs" />
      </div>
      <div className="absolute w-[100px] md:w-[180px] md:h-[600px] md:right-[400px] md:top-[50px] xl:right-[470px] xl:top-[110px] h-[150px] top-[180px] right-[140px]">
        <img src={Phone} alt="phone" />
      </div>
      <div className="absolute w-[30px] md:w-[60px] md:h-[80px] h-[30px] md:top-[350px] md:right-[270px] xl:right-[350px] xl:top-[380px] top-[250px] right-[115px]">
        <img src={Burger} alt="Burger" />
      </div>
      <div className="absolute w-[30px] xl:w-[120px] xl:h-[120px] xl:right-[240px] xl:top-[220px] md:w-[90px] md:h-[90px] md:top-[240px] md:right-[200px] h-[40px] top-[200px] right-[90px]">
        <img src={Card} alt="Card" />
      </div>
      <div className="absolute w-[30px] xl:w-[90px] xl:h-[90px] xl:right-[175px] xl:top-[120px] md:w-[60px] md:h-[70px] md:right-[135px] h-[40px] top-[150px] right-[55px]">
        <img src={Hand} alt="Hand" />
      </div>
      <div className="absolute w-[40px] xl:w-[110px] xl:top-[360px] xl:h-[100px] md:w-[70px] md:h-[80px] md:top-[350px] md:right-[20px] h-[40px] top-[250px] right-[10px]">
        <img src={Shoe} alt="Shoe" />
      </div>
      <div className="absolute w-[30px] xl:w-[100px] xl:h-[100px] xl:right-[250px] xl:top-[470px] md:w-[70px] md:h-[80px] md:top-[440px] md:right-[200px] h-[40px] top-[285px] right-[85px]">
        <img src={Coffee} alt="Coffee" />
      </div>
      <div className="absolute w-[300px] xl:w-[550px] xl:left-[-150px] xl:top-[400px] md:w-[400px] md:top-[380px] md:left-[-170px] h-[300px] top-[230px] left-[-125px]">
        <img src={Stairs1} alt="Stairs" />
      </div>
    </div>
  );
};

export default CashCard;

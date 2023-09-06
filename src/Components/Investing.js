import React from "react";
import Phone1 from "../Assets/InvestPage/investing-stocks.svg";
import Phone2 from "../Assets/InvestPage/investing-bitcoin.svg";
import Left from "../Assets/InvestPage/investing-graph-1.svg";
import Floor from "../Assets/InvestPage/investing-floor 1.svg";
import Right from "../Assets/InvestPage/investing-graph-3 1.svg";
import Right1 from "../Assets/InvestPage/investing-graph-2.svg";
import {
  BiLogoPlayStore,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { AiFillApple } from "react-icons/ai";
import { IoLogoTwitch } from "react-icons/io";

const Investing = () => {
  return (
    <div className="bg-green back2 p-4 text-center relative overflow-hidden h-[650px]">
      <div>
        <p className="text-white font-black md:mt-[60px] md:text-[35px] text-[20px] text">
          Investing
        </p>
      </div>
      <div className="md:absolute lg:left-[120px] xl:left-[160px] md:z-20 flex md:flex-row md:gap-6 flex-col md:mt-24 mt-12 ">
        <div className="flex flex-row md:gap-6">
          <div className="w-[50%]">
            <p className="text-[22px]  md:text-[32px] text-start text-black font-bold xl:text">
              Stocks
            </p>
            <p className="text-[10px] md:w-[200px] md:text-[14px] xl:text-[20px] xl:w-[300px] text-start">
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <div className="w-[50%] md:w-[150px] md:h-[300px] h-[200px] xl:ml-9">
            <img src={Phone1} alt="Phone 1" />
          </div>
        </div>
        <div className="flex flex-row md:gap-4">
          <div className="w-[50%] md:w-[150px] md:h-[300px] h-[200px]">
            <img src={Phone2} alt="Phone 2" />
          </div>
          <div className="w-[50%]">
            <p className="text-[22px] md:text-[32px] text-start text-black font-bold">
              Bitcoin
            </p>
            <p className="text-[10px] md:w-[250px] md:text-[15px] text-start xl:text-[20px] xl:w-[300px]">
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute md:z-[0] md:w-[1300px] lg:w-[1500px] w-[1000px] left-[-300px] h-[250px] bottom-[-90px] xl:w-[1800px] xl:h-[300px]">
        <img src={Floor} alt="Floor" />
      </div>
      <div className="absolute md:h-[250px] md:w-[300px] md:bottom-[-30px] h-[200px] w-[150px] bottom-[10px] left-[0px] xl:w-[350px] xl:bottom-3">
        <img src={Left} alt="Design Left" />
      </div>
      <div className="absolute md:h-[250px] md:w-[500px] xl:w-[550px] xl:right-[-370px] xl:bottom-[140px] md:right-[-350px] md:bottom-[110px] h-[200px] w-[300px] bottom-[90px] right-[-210px] ">
        <img src={Right1} alt="Design Left" />
      </div>
      <div className="absolute md:w-[300px] xl:w-[350px] xl:bottom-[-60px] md:bottom-[-90px] md:right-[-90px] md:h-[400px] h-[200px] w-[150px] bottom-[-10px] right-[-20px] ">
        <img src={Right} alt="Design Left" />
      </div>
      <div className="absolute bottom-0 left-[5px] md:left-[30px] md:bottom-2 flex flex-row ">
        <div className="flex flex-row gap-1 md:gap-4">
          <button className="btn border-[1px] md:w-[150px] md:h-[40px] rounded border-black font-extrabold md:text-[14px] text-[6px]">
            <BiLogoPlayStore
              className="md:w-[30px] md:h-[30px]"
              color="#00D54B"
            />
            GOOGLE PLAY
          </button>
          <button className="btn border-[1px]  md:w-[150px] md:h-[40px] rounded border-black font-extrabold md:text-[14px] text-[6px]">
            <AiFillApple className="md:w-[30px] md:h-[30px]" color="#00D54B" />
            APPSTORE
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-[5px] md:w-[400px] w-[200px]">
        <div className="flex flex-row">
          <div>
            <p className="text-[4px] text-start md:text-[6px]">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </p>
          </div>
          <div className="flex flex-row md:gap-2 items-end">
            <div>
              <IoLogoTwitch className="md:w-[30px] md:h-[30px]" />
            </div>
            <div>
              <BiLogoTwitter className="md:w-[30px] md:h-[30px]" />
            </div>
            <div>
              <BiLogoInstagram className="md:w-[30px] md:h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investing;

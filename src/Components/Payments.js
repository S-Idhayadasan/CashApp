import React from "react";
import Mobile from "../Assets/PaymentPage/payments-phone 1.svg";
import LPillar from "../Assets/PaymentPage/payments-pillar-large.svg";
import SPillar from "../Assets/PaymentPage/payments-pillar-small.svg";
import MPillar from "../Assets/PaymentPage/payments-pillar-medium.svg";
import Pillar from "../Assets/PaymentPage/payments-column.svg";

const Payments = () => {
  return (
    <div className="w-[100%] lg:h-[750px] h-[650px] relative overflow-hidden ">
      <div className="absolute top-[170px] md:left-[130px] md:top-[230px] md:w-[170px] lg:top-[250px] lg:left-[250px] left-[40px] lg:left-[190px] flex flex-col gap-2 h-auto w-[120px] lg:w-[150px] xl:top-[200px] xl:w-[350px]">
        <div className="flex flex-start">
          <h1 className="text-[#00D54B] font-black md:text-[35px] text-[20px] text">
            Payments
          </h1>
        </div>
        <div>
          <p className=" font-['Mulish'] text-start md:text-[13px] xl:text-[20px] text-[10px]">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
      </div>
      <div className="lg:w-[732px] h-[300px] xl:w-[720px] xl:h-[800px] xl:top-[-70px] xl:left-[310px] md:w-[500px] md:h-[380px] md:left-[110px] md:top-[150px] w-[400px] top-[120px] left-[10px] lg:h-[432px] z-[-1] absolute lg:top-[120px] lg:left-[100px] ">
        <img className="w-[100%] h-[100%]" src={Mobile} alt="Mobile" />
      </div>
      <div className="absolute bottom-[190px] md:w-[550px] md:bottom-[10px] md:h-[400px] md:right-[-10px] right-[-60px] lg:bottom-[40px] lg:right-[-60px] lg:w-[800px] lg:h-[500px]">
        <img src={Pillar} alt="Pillar rm" />
      </div>
      <div className="absolute lg:z-0 z-10 md:bottom-[120px] md:right-[130px] bottom-[0px] right-[0px] w-[150px] h-[150px] lg:w-[172px] lg:h-[253px] lg:bottom-[160px] lg:right-[150px]">
        <img src={MPillar} alt="Medium-pillar rm" />
      </div>
      <div className="absolute z-20 w-[150px] md:w-[170px] h-[150px] md:right-[340px] right-[170px] lg:w-[172px] lg:h-[250px] bottom-[0px] lg:bottom-[-30px] lg:right-[450px]">
        <img src={MPillar} alt="Medium-pillar rn" />
      </div>
      <div className="absolute lg:z-20 w-[150px] h-[150px] xl:left-[400px] md:left-[60px] md:bottom-[40px] md:z-30 bottom-[90px] left-[20px] lg:w-[172px] lg:h-[253px] lg:bottom-[30px] lg:left-[290px]">
        <img src={MPillar} alt="Medium-pillar ln" />
      </div>
      <div className="absolute lg:z-20 w-[150px] h-[150px] md:left-[230px] md:bottom-[65px] md:z-30 bottom-[90px] left-[80px] lg:w-[172px] lg:h-[253px] lg:bottom-[20px] lg:left-[40px]">
        <img src={MPillar} alt="Medium-pillar lm" />
      </div>
      <div className="absolute lg:w-[800px] lg:h-[500px] bottom-[-120px] md:w-[550px] md:right-[170px] md:bottom-[-80px] z-30 lg:z-0 right-[50px] w-[400px] h-[400px] lg:bottom-[-80px] lg:right-[190px]">
        <img src={Pillar} alt="Pillar rn" />
      </div>
      <div className="absolute bottom-[-100px] md:w-[550px] lg:w-[800px] lg:h-[500px] lg:z-30 md:right-[0px] md:left-[-435px] z-[10] lg:z-0 right-[300px] w-[400px] h-[400px] lg:bottom-[-90px] lg:left-[-630px]">
        <img src={Pillar} alt="Pillar lm" />
      </div>
      <div className="absolute z-10 bottom-[240px] md:left-[150px] md:bottom-[70px] left-[240px] w-[80px] h-[100px] lg:w-[130px] lg:h-[131px] lg:bottom-[80px] lg:left-[200px]">
        <img src={SPillar} alt="Pillar" />
      </div>
      <div className="absolute z-10 w-[200px] h-[200px] md:w-[250px] md:h-[230px] md:right-[300px] bottom-[60px] right-[120px] lg:w-[230px] lg:h-[330px] lg:bottom-[80px] lg:right-[410px]">
        <img src={LPillar} alt="Pillar" />
      </div>
    </div>
  );
};

export default Payments;

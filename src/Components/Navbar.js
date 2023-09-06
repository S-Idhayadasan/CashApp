import React from "react";
import Logo from "../Assets/HeroPage/logo.svg";
import Eye from "../Assets/HeroPage/eye button.svg";
import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const drop = useRef();
  const handleClick = () => {
    setisopen(!isopen);
  };
  useEffect(() => {
    if (isopen) {
      drop.current.style.height = "250px";
    } else {
      drop.current.style = "0px";
    }
  }, [isopen]);

  return (
    <div>
      <div className="bg-transparent w-[100%] p-8 overflow-x-hidden h-150px items-center flex flex-row justify-between">
        <div className="h-8 w-8 lg:w-[100px] lg:h-[60px] md:w-[40px] md:h-[40px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="md:hidden">
          <button onClick={handleClick}>
            <RxHamburgerMenu size={30} color="white" />
          </button>
        </div>
        <div className="hidden md:flex md:justify-center md:w-[100%]">
          <div className="font-['Agrandir'] flex flex-row gap-4 font-bold text-white">
            <p>SIGN IN</p>
            <p>LEGAL</p>
            <p>LICENSES</p>
            <p>SECURITY</p>
            <p>CAREERS</p>
            <p>PRESS</p>
            <p>SUPPORT</p>
            <p>STATUS</p>
            <p>CODEBLOG</p>
          </div>
        </div>
        <div className="w-[40px] lg:w-[100px] h-[40px] md:w-[60px] md:h-[60px]">
          <img src={Eye} alt="Eye" />
        </div>
      </div>
      <div
        ref={drop}
        className="overflow-hidden h-[0] absolute bg-white w-[100%] z-50 h-[0]"
      >
        {isopen ? (
          <div>
            <div className="flex flex-col justify-center items-center gap-2 text-black font-black w-[100%]">
              <p>SIGN IN</p>
              <p>LEGAL</p>
              <p>LICENSES</p>
              <p>SECURITY</p>
              <p>CAREERS</p>
              <p>PRESS</p>
              <p>SUPPORT</p>
              <p>STATUS</p>
              <p>CODEBLOG</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./index.css";
import Hero from "./Components/Hero";
import Payments from "./Components/Payments";
import Banking from "./Components/Banking";
import CashCard from "./Components/CashCard";
import Investing from "./Components/Investing";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Payments />
      <Banking />
      <CashCard />
      <Investing />
    </div>
  );
};

export default App;

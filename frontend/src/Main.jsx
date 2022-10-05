import React from "react";
import Categories from "./components/Categories";
import Curosel from "./components/Curosel";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import TopSellings from "./components/TopSellings";

const Main = () => {
  return (
    <div>
      <Curosel />
      <Categories />
      <TopSellings />
    </div>
  );
};

export default Main;

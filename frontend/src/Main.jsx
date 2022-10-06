import React from "react";
import Categories from "./components/Categories";
import Curosel from "./components/Curosel";
import { ErrorBoundary } from "./components/ErrorBoundary";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import TopSellings from "./components/TopSellings";

const Main = () => {
  return (
    <div>
      <ErrorBoundary>
      <Curosel />
      <Categories />
      <TopSellings />
      </ErrorBoundary>
    </div>
  );
};

export default Main;

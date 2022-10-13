import React from "react";
// import Dashboard from '../../pages/Admin/Dashboard'

const MainContainer = (props) => {
  return (
    <div>
      <div className="main" data-main="data-main">
        <article className="art">{props.children}</article>
      </div>
    </div>
  );
};

export default MainContainer;

import React from "react";

import Data from "./Data";
const Body = ({ logIn }) => {
  return <>{logIn ? <Data /> : null}</>;
};

export default Body;

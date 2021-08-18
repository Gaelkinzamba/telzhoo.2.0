import React from "react";
import { Route } from "react-router-dom";

const SwitchModeRouter = ({
  component: Component,
    darkMode,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={ props =>     <Component  {...rest}  {...props}     darkMode={darkMode}/>}
    />
  );
};

export default SwitchModeRouter;
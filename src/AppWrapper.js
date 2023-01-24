import React from "react";
import AuthState from "./contexts/Auth/AuthState";
import App from "./App";

const AppWrapper = () => {
  return (
      <AuthState>
        <App />
      </AuthState>
  );
};

export default AppWrapper;

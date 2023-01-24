import React ,{useContext}from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Register from "./views/Register";
import Login from "./views/Login";
import Courses from "./views/Courses";
import Light from "./theme/Light";
import AuthContext from "./contexts/Auth"

function App() {
  const checkAuthApp= useContext(AuthContext);
  return (
    <ThemeProvider theme={Light}>
    <Routes>
    <Route path="/" element={<Login/>} />
    {checkAuthApp.accessToken?<Route path="/courses" element={<Courses/>} />:null}
    <Route path="/register" element={<Register/>} />
    </Routes>
    </ThemeProvider> 
  );
}

export default App;








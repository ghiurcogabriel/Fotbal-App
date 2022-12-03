import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainApp from "./components/MainApp/MainApp";
import TeamsHomePage from "./components/TeamsHomePage/TeamsHomePage";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<MainApp />} />
      </Routes>
      <Routes>
        <Route path="/TeamsHomePage" element={<TeamsHomePage />} />
      </Routes>
    </>
  );
}

export default App;

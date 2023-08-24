import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Testboardpage from "./pages/TestBoardPage.js"



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Testboardpage />} />
     </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import {Route, Routes} from "react-router-dom";
import NewMeal from "./Containers/NewMeal/NewMeal";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="text-center">
      <header>
        <Navbar/>
      </header>
      <div className="fs-3">
        <Routes>
          <Route path="/new-meal" element={<NewMeal/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

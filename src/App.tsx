import React from 'react';
import {Route, Routes} from "react-router-dom";
import AddMeal from "./Containers/AddMeal/AddMeal";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Edit from "./Containers/Edit/Edit";

function App() {
  return (
    <div className="text-center">
      <header>
        <Navbar/>
      </header>
      <div className="fs-3">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new-meal" element={<AddMeal/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

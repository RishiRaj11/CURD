import React, { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import AddEmp from "./AddEmp";
import UpdateEmp from "./UpdateEmp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddButton from "./AddButton";
const App = () => {
  const [singleEmp, setSigleEmp] = useState();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home setSigleEmp={setSigleEmp} />} />
        <Route path="/addEmp" element={<AddEmp />} />
        <Route path="/update" element={<UpdateEmp singleEmp={singleEmp} />} />
      </Routes>
      {/* <Home /> */}
      {/* <AddEmp /> */}
    </Router>
  );
};

export default App;

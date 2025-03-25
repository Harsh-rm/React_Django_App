import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home"; 
import AnimationPage from "./AnimationPage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<AnimationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

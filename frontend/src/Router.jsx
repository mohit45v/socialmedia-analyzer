import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; 
import Home from "./pages/Home"; 
// import Analytics from "./pages/Analytics";
// import Settings from "./pages/Settings";
// import About from "./pages/About";

const AppRouter = () => {
  return (
    <Router>
      <div className="flex">
        
        

        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;

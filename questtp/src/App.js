// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/AuthPage/SignIn";
import SignUp from "./pages/AuthPage/SignUp";
import TutorialPage from "./pages/TutorialPage";
import IslandPage from "./pages/IslandPage";
import OpenWorldPage from "./pages/OpenWorldPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/island" element={<IslandPage />} />
        <Route path="/openworld" element={<OpenWorldPage />} />
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;

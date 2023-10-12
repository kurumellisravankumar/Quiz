import React from "react";
import Introduction_page from "./components/pages/Introduction_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import General_intructions_pagepage from "./components/pages/General_intructions_page";
import Quiz from "./components/pages/Quiz";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction_page />} />
          <Route
            path="/General_intructions_page"
            element={<General_intructions_pagepage />}
          />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

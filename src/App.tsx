import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Pokemon } from "./pokemon/Pokemon";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Link to="/pokemon">Pokemon</Link>
        </div>
        <Routes>
          <Route path="/pokemon" element={<Pokemon />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

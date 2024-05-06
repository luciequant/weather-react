import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <Footer />
      </header>
    </div>
  );
}

export default App;

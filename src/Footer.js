import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a href="https://github.com/luciequant" target="_blank" rel="noreferrer">
        {" "}
        Lucie Quantová
      </a>
      , is open-sourced on
      <a
        href="https://github.com/luciequant/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub
      </a>{" "}
    </footer>
  );
}

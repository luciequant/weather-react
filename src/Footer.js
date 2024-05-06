import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a href="https://github.com/luciequant" rel="noopener" target="_blank">
        {" "}
        Lucie Quantová
      </a>
      , is open-sourced on
      <a
        href="https://github.com/luciequant/weather-react"
        rel="noopener"
        target="_blank"
      >
        {" "}
        GitHub
      </a>{" "}
    </footer>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavLinks from "./Nav-links.js";

function App() {
  const links = NavLinks.map((link) => {
    return <Header link1={link.name} link2={link.name} link3={link.name} />;
  });
  return (
    <div>
      {links}
      {/* <Header link1="Home" link2="search" link3="account" /> */}
      <Main />
      <Footer />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

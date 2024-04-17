import React from "react";
import ReactDOM from "react-dom"; // Thêm dòng này để nhập ReactDOM
import { useNavigate } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./component/MainComponent";

// function sayHi(name) {
//   if (name) {
//     return <p>Xin chào, {name} !</p>;
//   } else {
//     return <p>Xin chào bạn !</p>;
//   }
// }
// const element = React.element("h2", { className: "title" }, "khoa hoc react");
const App = () => {
    const navigate = useNavigate();
  return <><MainComponent></MainComponent></>;
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Header from "./Components/Header";
import AddContacts from "./Components/AddContacts";

ReactDOM.render (
  <>
    <Header />
    <AddContacts />
  </>,
  document.getElementById("form")
)
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
/* import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"; */
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";
import "../styles/custom.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

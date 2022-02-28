import React from "react";
import ReactDOM from "react-dom";
import {Quiz} from "./quiz";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><Quiz/></BrowserRouter>, document.getElementById("app"));
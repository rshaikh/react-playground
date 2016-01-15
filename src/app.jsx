import React from "react";
import ReactDOM from 'react-dom';
import Greeting from "./greeter.jsx";

ReactDOM.render(
    <Greeting name="World"/>,
    document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/tailwind.generated.css";
import {Header} from "./Header";
import {App} from './App';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);


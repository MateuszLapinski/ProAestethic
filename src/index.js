import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/Configurator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Layout.css';
import './CSS/card.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./layout";
import {Configurator} from "./Configurator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.StrictMode>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<App/>} />
                  </Route>
                  <Route path="/configurator" element={<Layout />}>
                      <Route index element={<Configurator/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

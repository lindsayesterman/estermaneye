import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemApp from './ItemApp';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <ItemApp />
  </BrowserRouter>,
  document.getElementById('root')
);


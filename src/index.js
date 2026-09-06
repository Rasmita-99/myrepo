import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import { NetflixRegisterComponent } from './Components/NetflixRegisterComponent';
import  NetflixIndexComponent  from './Netflix/NetflixIndexComponent';
import NasaApiComponent from './Components/NasaApiComponent';
import LoginComponent from './Components/LoginComponent';
import ShoppingComponent from './Components/ShoppingComponent';
import TwowayBinding from './Components/TwowayBinding';
import LoginsComponent from './Components/LoginsComponent';
import FormValidation from './Components/FormValidation';
import LifeCycleDemo from './Components/LifeCycleDemo';
import ImageReactNative from './Components/ImageReactNative';
import FilterandSortedData from './Components/FilterandSortedData';
import Mycomponent from './Components/MyComponentApi'

import reportWebVitals from './reportWebVitals';
import MyComponentApi from './Components/MyComponentApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ImageReactNative /> */}
    {/* <FilterandSortedData /> */}
       <MyComponentApi />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

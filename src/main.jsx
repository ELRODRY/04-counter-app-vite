import React from 'react'; // importacion de react
import ReactDOM from 'react-dom/client'; // elemento para renderizar aplicaion
import { FirstApp } from './FirstApp';
//import { HelloWorldApp } from './HelloWorld';
import './styles.css' 
// Forma de renderizar en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <FirstApp />
  </React.StrictMode>
);

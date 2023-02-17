import React from 'react'; // importacion de react
import ReactDOM from 'react-dom/client'; // elemento para renderizar aplicaion

function App() {
  return <h1> Hola Mundo</h1>;
}

// Forma de renderizar en el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

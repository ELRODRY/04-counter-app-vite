import React from 'react'; // elemento para renderizar aplicaion
import ReactDOM from 'react-dom/client'; // elemento para renderizar aplicaion

function App() {
  return <h1> Hola Mundo</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

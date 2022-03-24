import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';


const App = () => {
  return (
    <h1>Coucou</h1>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;

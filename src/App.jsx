import React from 'react';
import './styles/index.scss';
import './App.scss'
import Routes from './routes'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster />
      <Routes />
      hello
    </div>
  )
}

export default App;

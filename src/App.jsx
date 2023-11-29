import React from "react";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import AppRoutes from "./routes/Index";

function App() {


  return (
    <div>
     <AppRoutes/>
    </div>
  )
}

export default App

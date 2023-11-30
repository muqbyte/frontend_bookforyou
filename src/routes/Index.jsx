import * as React from 'react';
import { useState, useEffect } from 'react';
import Login from '../pages/Login';
import Register from '../pages/register';
import Home from '../pages/Home';
// import Sell from '../pages/Sell';

import Dashboard from '../pages/Dashboard';
import Cookies from 'universal-cookie';
import axios from 'axios';


import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
    Route,
    Routes,
    Link,
    BrowserRouter,
    useNavigate,
  } from "react-router-dom";


  const AppRoutes = ()=> {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} />\
                <Route  path="/login" element={<Login />} />
                <Route  path="/register" element={<Register />} />
              
                {/* protected routes */}
                <Route  path="/admin/*" element={<ProtectedRoutes />} />

                
            </Routes>
        </BrowserRouter>
    )
  }

  const ProtectedRoutes=()=>{
    const cookies = new Cookies(null ,{ path: '/' });
    const token = cookies.get("token")
    const navigate=useNavigate();
    const [userID, setUserID] = useState(null)
   

   
    // console.log(config)

    const validityToken = async()=>{
        try {
            const config ={
                headers:{Authorization:`Bearer ${token}`}
            };
            const res= await axios.get(`${import.meta.env.VITE_BASE_API_URL}/protectedController`, config)
            console.log(res)
            setUserID(res.data.data.user)
            console.log("USER ID",userID)
        } catch (error) {
            console.error(error)
            cookies.remove("token")
            alert(error.response.data.message)
            navigate('/login')
        }
    }

    useEffect(()=>{
        if(token){
            validityToken();
        }
    },[token]);

    useEffect(() => {
        console.log('USER ID', userID);
      }, [userID]);


    return(
        <Routes>
                <Route  path="/" element={<Dashboard userID={userID} />} />    
                {/* <Route  path="/sell" element={<Sell />} /> */}
                {/* <Route  path="/myCart" element={<MyCart />} /> */}
        </Routes>
    )
  }

  export default AppRoutes;
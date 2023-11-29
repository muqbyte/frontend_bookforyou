import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/Login";


const HomeHeader = () =>{

    const navigate = useNavigate()
    const registerPage =()=>{
        navigate("/Register")
    }

 
    const signPage =()=>{
        navigate("/Login")
    }


    return(
        <>
        <nav className="navbar navbar-light bg-light" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div style={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", paddingLeft:30}}>
                <p style={{fontSize:20, fontWeight:500}} >PreLovedPages</p>
            </div>
            
            <div style={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",  gap:20, paddingRight:30}}>
                    <button  type="submit" style={buttonContainer} onClick={registerPage} className="button">Register</button>
                    <button  type="submit" style={buttonContainer} onClick={signPage} >Sign In</button>
            </div>
        </nav>
        </>
    )
}

const buttonContainer ={
    border:"2px solid black",
    paddingLeft:"10px",
    paddingRight:"10px",
    borderRadius:"10px",
    backgroundColor:"transparent",
    fontSize:18,
  
};





export default HomeHeader;
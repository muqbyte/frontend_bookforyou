import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderFirst from "../components/HeaderFirst"
import Center from "../components/Center"
import Dashboard from "./Dashboard";
import axios from "axios";
import Cookies from 'universal-cookie';

const Login = () =>{
    const cookies = new Cookies(null ,{ path: '/' });
const navigate = useNavigate();

const navigateRegister = ()=>{
    navigate("/Register")
}



    const handleSubmit =async(e)=>{
        e.preventDefault();
        //get all values
        const email=(e.target[0].value);
        const password=(e.target[1].value);
        const reqBody={
            email:email,
            password:password,
        }
        console.log(reqBody)
    
         try {
          // success scope
          const res = await axios.post("http://localhost:8080/userLogin", reqBody);
          console.log(res);
          alert("Login successful!");
          cookies.set('token', res.data.token);
          // redirect to login page
          navigate("/admin");
        } catch (error) {
          // error scope
          console.error(error);
          alert(error.response.data.message);
        }
      
    }
    return(
        <>
            <HeaderFirst/>
            <Center>
                <div className="shadow-lg" style={{padding:50, borderRadius:40}}>
                    <form onSubmit={(event)=>handleSubmit(event)}> 
                        <div style={{marginBottom:10}}>
                            <h3 style={{fontSize:20}}>Please login to your account</h3>
                        </div>
                        
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" style={{background:'#008CBA', color:'white', padding:5, borderRadius:10}}>
                                    Submit
                                </button>
                            </div>
                                <div style={{marginTop:10, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:5}}> 
                                <p > NO ACCOUNT ?</p>
                                <button type="submit" style={{ padding:5, borderRadius:10, color:"blue"}} onClick={navigateRegister}>
                                    SIGN UP
                                </button>
                                
                            </div>
                    </form>
                </div>
            </Center>
        </>
    )
}

export default Login;
import React from "react";
import HeaderFirst from "../components/HeaderFirst";
import Center from "../components/Center";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Register = () =>{
const navigate = useNavigate();

const handleSubmit =async(e)=>{
    e.preventDefault();
    //get all values
    const name=(e.target[0].value);
    const email=(e.target[1].value)
    const password=(e.target[2].value);
    const reqBody={
        name:name,
        email:email,
        password:password,
    }
    console.log(reqBody)

     try {
      // success scope
      const res = await axios.post("http://localhost:8080/userRegistration", reqBody);
      console.log(res);
      alert("Registration successful!");
      // redirect to login page
      navigate("/Login");
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
            <div className="shadow-lg" style={{padding:100, borderRadius:40}}>
                    
                        <form onSubmit={(event)=>handleSubmit(event)}>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <h3 style={{fontSize:20, fontWeight:"normal"}}>Register</h3>
                            </div>
                            

                            <div className="mb-3">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"
                                        name="name"
                                        id="name"
                                    />
                                </div>


                                <div className="mb-3">
                                    <label>Email address</label>
                                    <input
                                        type="text"
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
                                    <button type="submit" style={{border:"2px solid", padding:"5px 0", backgroundColor:"#3498db", borderRadius:10, color:"white", fontWeight:"bold"}}>
                                        Submit
                                    </button>
                                </div>

                        </form>
                    </div>
        </Center>
       
        </>
            
    )
}

export default Register;
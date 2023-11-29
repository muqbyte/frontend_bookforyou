import React from "react";
import Book from "../assets/book.jpg"

const Center = ({children}) =>{
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", marginTop:20}}>
        {children}
    </div>
    );
    
}

export default Center;
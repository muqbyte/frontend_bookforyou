import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


const SearchBar = ()=>{
    return(
        <div className="input-group" style={{borderBottom:"1px solid", display:"flex", flexDirection:"row",justifyContent:"center", paddingBottom:10, paddingTop:10, gap:100}}>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:10}}>
                <div className="form-outline" style={{width:500}}>
                    <input type="search" id="form1" className="form-control" placeholder="TYPE HERE" />
                </div>
                <div>
                    <button type="button" style={{backgroundColor:"green", color:"white", padding:"7px 14px", fontWeight:"bold", borderRadius:10}}>
                    SEARCH
                    </button>
                </div>
                
            </div>

           
                
        </div>
    )
}

export default SearchBar;
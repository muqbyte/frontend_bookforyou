import React from "react";

const Content = ({children}) =>{
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:30, flexWrap:"wrap", marginLeft:120, marginRight:120}}>
                {children}
        </div>
    )
}

export default Content;
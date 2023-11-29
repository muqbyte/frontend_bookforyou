import React from "react";
import {useState, useEffect} from "react"

const Card = (props)=>{
    const imageUrl=props.imageUrl;
    const title=props.title;
    const publisher=props.publisher;
    const price=props.price

    const handleChange =()=>{
        alert("Successfully add to cart")
    }

    return(
            <div className="card" style={{width: 250, display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <img src={imageUrl} style={{height:"auto", maxHeight:280, width:"auto", maxWidth:280}} className="card-img-top" />
                    <div className="card-body" style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", gap:2}}>
                        <h5 className="card-title">{title}</h5>
                        <p >{publisher}</p>
                        <p>{price}</p>
                        <a href="#" className="btn btn-primary" onClick={handleChange}>Add to cart</a>
                    </div>
            </div>
    )   
}

export default Card;
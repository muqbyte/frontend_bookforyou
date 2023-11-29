import React from "react";
import {useState, useEffect} from "react"
import Navbar from 'react-bootstrap/Navbar';
import Card from "../components/Card";
import Content from "../components/Content";
import Sell from "./Sell";
import MyItem from "./MyItem";
// import MyCart from "./MyItem";


const Dashboard = (props) =>{
    const [data, setData] = useState([]);
    const [itemData, setItemData] = useState([])
    const [loading, setLoading] = useState(true);
    const userID=props.userID

   




    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/fetchdata');
          const result = await response.json();
          setData(result.data);
          console.log(data)
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

useEffect(()=>{
    fetchData();
    
},[])

    return(
        <>
        <nav className="navbar navbar-light bg-light" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div style={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", paddingLeft:30}}>
                <p style={{fontSize:20, fontWeight:500}} >PreLovedPages</p>
            </div>
            
            <div style={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",  gap:20, paddingRight:30}}>
                    
                    <Sell userID={userID}/>
            </div>
        </nav>
           
        <div style={{marginLeft:100,padding:10}}>
                <h4 style={{fontWeight:"bold", fontSize:20}}>RECOMMENDED FOR YOU</h4>
            </div>
            
            <Content>
            {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <Card
              key={item.ID}
              imageUrl={item.url} // Adjust the property based on your database schema
              title={item.bookName}
              price={item.price}
              publisher={item.publisher}
            />
          ))
        )}
               
            </Content>
        </>
    )
}

const buttonContainer ={
    border:"none",
    paddingLeft:"10px",
    backgroundColor:"transparent",
    fontSize:18
};



export default Dashboard;
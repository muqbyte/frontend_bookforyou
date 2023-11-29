import React from "react";
import {useState, useEffect} from "react"
import HomeHeader from "../components/HomeHeader";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Content from "../components/Content";

const Home = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


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
    fetchData()
},[])
    return(
        <>
            <HomeHeader/>
            <div>
                {/* <SearchBar/> */}
            </div>
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


export default Home;
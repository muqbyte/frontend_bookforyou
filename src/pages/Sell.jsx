import React from "react";
import HomeHeader from "../components/HomeHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import axios from "axios";
const instance = axios.create()

const Sell = (props) =>{
    const [show, setShow] = useState(false);
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fetchData=props.fetchData
    const userID=props.userID

      
    
        const handleSubmit =async(e)=>{
            e.preventDefault();
            //get all values
            const bookname = e.target.bookname.value;
            const publisher = e.target.publisher.value;
            const year = e.target.year.value;
            const price = e.target.price.value;
            const uploadPreset= import.meta.env.VITE_UPLOAD_PRESET
            // setImage(e.target.url.files[0])
            const url = e.target.url.files[0];
            // setLoginUserID(userID)
            
            console.log("Book Name:", bookname);
            console.log("Publisher:", publisher);
            console.log("Year:", year);
            console.log("Price:", price);
            console.log("URL:", url);
            console.log("ID", userID)

           
            
          
            const formData = new FormData();
            // formData.append("userID", userID)
            // formData.append("bookname", bookname);
            // formData.append("publisher", publisher);
            // formData.append("year", year);
            // formData.append("price", price);
            formData.append("file", url);
            formData.append("upload_preset", uploadPreset)
      
            console.log("FormData:", formData);


        

              try {
                const res = await axios.post(`${import.meta.env.VITE_BASE_CLOUDINARY_URL}`,formData)
                console.log(res.data.url)
                const imageUrl=res.data.url
                const reqBody={
                  userID,
                  bookname,
                  publisher,
                  year,
                  price,
                  imageUrl
                }
                try {
                  const res = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/upload`, reqBody);
                  console.log(res);
                  alert("Successful!");
                  window.location.reload(false);
                } catch (error) {
                  console.error(error);
                }

              } catch (error) {
                console.log(error)
              }
                
             
        
            
          
        }
      
        return (
          <>

           <button  type="submit" style={{backgroundColor:"green", color:"white", border:"none", fontSize:18, paddingLeft:20, paddingRight:20, borderRadius:10}} onClick={handleShow}>SELL</button>
            
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Fill up information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form className="w-full max-w-sm"  onSubmit={(event)=>handleSubmit(event)}>
                <div className="mb-6 md:flex md:items-center">
                    <div className="md:w-1/3">
                        <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" >
                          Book's Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="bookname" name="bookname" type="text"  />
                    </div>
                </div>
                <div className="mb-6 md:flex md:items-center">
                      <div className="md:w-1/3">
                            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" >
                            Publisher
                          </label>
                      </div>
                        <div className="md:w-2/3">
                            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="publisher" name="publisher" type="text"/>
                        </div>
                </div>
        
                <div className="mb-6 md:flex md:items-center">
                      <div className="md:w-1/3">
                            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" >
                            Year
                          </label>
                      </div>
                        <div className="md:w-2/3">
                            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="year" name="year" type="text"/>
                        </div>
                </div>
        
            
        
        
                <div className="mb-6 md:flex md:items-center">
                      <div className="md:w-1/3">
                            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" >
                            Price
                          </label>
                      </div>
                        <div className="md:w-2/3">
                            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="price" name="price" type="text"/>
                        </div>
                </div>
        
                <div className="mb-6 md:flex md:items-center">     
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="url" name="url" type="file" />
                </div>
        
        
                
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                      <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" >
                        Submit
                      </button>
                    </div>
                </div>
        </form>


                </Modal.Body>
              
            </Modal>
          </>
        );
    
}

export default Sell;


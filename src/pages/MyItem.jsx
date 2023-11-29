import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const MyItem = (props) =>{
  const [show, setShow] = useState(false);
  const idImageUrl=props.idImageUrl;
  const idBookName=props.idBookName;
  const idPrice=props.idPrice;

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
  <Button  type="submit" style={{ color:"black", border:"none", fontSize:18, paddingLeft:20, paddingRight:20, borderRadius:10}} onClick={handleShow}>My Item</Button>
    

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>My Item</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
            <div >
            <img src="https://res.cloudinary.com/db1hdxmao/image/upload/v1700740566/c8tamnukeobrsap3pjzs.jpg" className="card-img-top" style={{width:100}}/>
            </div>
            <div style={{width:200, display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <p>Vibration Engineering</p>
            </div>
            <div>
                <p>RM 120</p>
            </div>
      </Modal.Body>
      <Modal.Footer style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <button type="submit" style={{background:'#008CBA', color:'white', padding:"8px 20px",borderRadius:10}}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default MyItem;


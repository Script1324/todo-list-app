import React from 'react';
import "../Styles/ModalButton.css"
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { UseProvider } from './Provider/StateProvider';

function ModalButton() {

  const{modal,setModal} = UseProvider()

  const toggleModal = () =>{
    setModal(!modal)
  }

  return <div className='button-container'>
  
                <AddCircleOutlinedIcon onClick={toggleModal}  style={{fontSize:"50px",color:"tomato"}}/> 
  
  </div>;
}

export default ModalButton;

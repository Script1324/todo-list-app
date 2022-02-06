import React,{useState} from 'react';
import "../Styles/Modal.css"
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { UseProvider } from './Provider/StateProvider';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Modal() {

    const{modal,setModal,addTask,Darkmode} = UseProvider();
    
  
    const [value,setValue] = useState("")
    const [category,setCategory] =  useState('Personal')

    const toggleModal = () =>{
            setModal(!modal)
    }

    const AddTask = (e) =>{
            e.preventDefault();
            const newTask = {
                task:value,
                isCompleted:false,
                category:category,
                categoryCount:{
                    personal:0,
                    business:0,
                },
                id: Math.random() + 2
            }

        addTask(newTask)
        setValue('')

    }


  return <div>
         
            <div className='modal-backdrop' onClick={toggleModal}>

            </div>  

            <div className={Darkmode ? 'modal-container active':'modal-container'}>
                    <div className='closeModal-icon'>
                        <CancelOutlinedIcon onClick={toggleModal} style={{fontSize:"40px"}}/>
                    </div>
                    <h1>Add Task <AddOutlinedIcon/> </h1>

                   <form>
                       <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} placeholder='enter your task...'/>
                        <label>Select Category</label>

                                <div style={{margin:"20px 0"}}>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={category}
                                                label="Age"
                                                onChange={(e)=> setCategory(e.target.value)} >
                                                    
                                                <MenuItem value={"Personal"}>Personal</MenuItem>
                                                <MenuItem value={"Business"}>Business</MenuItem>
                                               
                                            </Select>
                                            </FormControl>
                                        </Box>
                                </div>

                          <button type='submit' onClick={AddTask}>Add Task <AddOutlinedIcon/></button>  
                   </form>
            </div>

  </div>;
}

export default Modal;


import React,{useState,useEffect} from 'react';
import { UseProvider } from './Provider/StateProvider';
import "../Styles/TaskContent.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function TaskContent() {

    const {tasks,deleteItem,checkedItem,Darkmode} = UseProvider()
    
 
  return <div className= {Darkmode ? "taskcontent-container active" : 'taskcontent-container'}>
                    <h3>Today's Task</h3>
          
            {tasks !== undefined ? tasks.map((task)=>{
              
              
                return  <div className='taskcontainer' key={task.id}>

                           <li style={{borderLeft:task.category == "Personal" ? "5px solid rgb(110, 226, 216)" : "5px solid rgb(245, 47, 90)"}} 
                            
                            className={task.isCompleted ? "list-active" : "list" } onClick={()=>checkedItem(task)}>{task.task}</li>
                           < button onClick={() => deleteItem(task.id)}><DeleteOutlineOutlinedIcon/></button>
              
                        


                     </div>
            }):"no task left"}
       </div>;
}

export default TaskContent;

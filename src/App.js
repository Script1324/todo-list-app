import { useEffect,useState } from "react";
import Header from "./Components/Header";
import ReactDOM from "react-dom";
import "./App.css"
import Categories from "./Components/Categories";
import TaskContent from "./Components/TaskContent";
import Modal from "./Components/Modal";
import ModalButton from "./Components/ModalButton";
import { UseProvider } from "./Components/Provider/StateProvider";
import NavBar from "./Components/NavBar";

function App() {
    
  const{modal,menuActive} = UseProvider()

  return (

    <div className="App">
        
         <div className={menuActive? "nav-content active":"nav-content"}>
             <NavBar/>
          </div>
        
        
          <div className= {menuActive? "main-content active":"main-content"} >
            <Header/>
            <Categories/>
            <TaskContent/>
            <ModalButton/>
          </div>  

        {ReactDOM.createPortal(
          modal ? <Modal /> : null

          ,document.getElementById("modal")
        )}
            


     </div>
  );
}

export default App;

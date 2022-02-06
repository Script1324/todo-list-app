import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { UseProvider } from './Provider/StateProvider';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import "../Styles/Header.css"

function Header() {

  const {toggleMenu,menuActive,Darkmode,darkMode} = UseProvider()



  return <div className={Darkmode ? "header-container active": 'header-container'}>
            <div className='menu-icon' onClick={toggleMenu}>
                        {menuActive ?   <CloseOutlinedIcon/> : <MenuOutlinedIcon/> }
            </div>
            <div className='search-icon'>
                        {Darkmode ? <><label>DarkMode</label> <WbSunnyOutlinedIcon style={{marginRight:'20px'}} onClick={darkMode}/> </> : <><label>Lightmode</label><DarkModeOutlinedIcon style={{marginRight:'20px'}} onClick={darkMode} /></>}
                        <SearchOutlinedIcon/>
                        <NotificationsNoneOutlinedIcon/>
            </div>
  </div>;
}

export default Header;

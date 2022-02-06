import React from 'react';
import "../Styles/Navbar.css"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import AppSettingsAltOutlinedIcon from '@mui/icons-material/AppSettingsAltOutlined';
import { UseProvider } from './Provider/StateProvider';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function NavBar() {

    const{menuActive,Darkmode} = UseProvider()


  return <div className={ Darkmode ? "navbar-container active" : 'navbar-container'}>
                <div className='nav-image'>
                    <AccountCircleOutlinedIcon style={{fontSize:"150px",color:'rgb(65, 60, 65)'}}/>
                </div>
                <div className={Darkmode? "nav-list active":'nav-list'}>
                    <ul>
                        <li className={menuActive ? "menulist-active": ""}><i> <DashboardOutlinedIcon/> </i> Dashboard  </li>
                        <li className={menuActive ? "menulist-active": ""}><i> <CategoryOutlinedIcon/></i> Category</li>
                        <li className={menuActive ? "menulist-active": ""}><i> <InfoOutlinedIcon/></i> About Us</li>
                        <li className={menuActive ? "menulist-active": ""}><i> <AddIcCallOutlinedIcon/> </i> Contact Us </li>
                        <li className={menuActive ? "menulist-active": ""}><i> <AppSettingsAltOutlinedIcon/> </i> Settings </li>
                    </ul>
                </div>
  </div>;
}

export default NavBar;

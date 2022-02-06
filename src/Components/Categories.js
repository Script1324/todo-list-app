import React from 'react';
import "../Styles/Categories.css"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { UseProvider } from './Provider/StateProvider';

function Categories() {

        const{Darkmode,darkMode,tasks} = UseProvider()

          return <div className={Darkmode? "categories-container active": 'categories-container'}>
            <h1>Categories</h1>
            
            <div className='card-categories'>
 
                    <div className='Personal'>
                              <div>
                                   <h4>Personal</h4>
                                   <h5>Task Indicator</h5>
                              </div>
                              <div className='personal-icon'> 
                                      <AccountCircleOutlinedIcon style={{fontSize:"70px",color:"white"}}/>
                              </div>
                    </div>

                    <div className="Business">
                               <div>
                                   <h4>Business</h4>
                                   <h5>Task Indicator</h5>
                              </div>

                              <div className='business-icon'>
                                    <BusinessCenterOutlinedIcon style={{fontSize:"70px",color:"white"}}/>
                              </div>
  
                    </div>
            </div>
  </div>;
}

export default Categories;

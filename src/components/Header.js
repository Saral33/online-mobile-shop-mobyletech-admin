import React,{useState} from 'react'
import { ReactComponent as CloseOutlined } from '../assests/x.svg'
import {ReactComponent as MenuOutlined} from '../assests/menu.svg'
import {BellOutlined, MessageOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
      <div className="header">
        <div className="logo-nav">
             Mobyletech 
          </div>
  
          <ul className={click ? "nav-options active" : "nav-options"}>
              <Badge count={5} >
              <li className="option" onClick={closeMobileMenu}>
             <MessageOutlined className='icons'/>
            </li>
              </Badge>
            <Badge count={2}>
            <li className="option" onClick={closeMobileMenu}>
            <BellOutlined className='icons'/>
            </li>
            </Badge>
            <li className="option" onClick={closeMobileMenu}>
            <div className='nav-image-cover'>
            <img className='nav-image' src='https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='user-pic'/>
            </div>
            </li>

          </ul>
    
       
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseOutlined className="menu-icon" />
          ) : (
            <MenuOutlined className="menu-icon" />
          )}
        </div>
      </div>
    );
  };

export default Header

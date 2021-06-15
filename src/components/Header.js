import React,{useState} from 'react'
import { ReactComponent as CloseOutlined } from '../assests/x.svg'
import {ReactComponent as MenuOutlined} from '../assests/menu.svg'
import {BellOutlined, MessageOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useSelector } from 'react-redux';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const {user} = useSelector(state=> state.userInfo)
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
            <li className="option" style={{display:'flex',alignItems:'center'}} onClick={closeMobileMenu}>
            <div className='nav-image-cover'>
            <img className='nav-image' src={user?.image} alt='user-pic'/>
            </div>
            <div style={{marginLeft:'6px'}}>{user?.username}</div>
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

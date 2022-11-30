import React,{useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
// import styled  components
import Container from './Container';
import {BiSun} from "react-icons/bi";
import {RiMoonClearLine} from "react-icons/ri";
import { StyledLi, CustomLabel, CustomController, NavMenuLinks, NormalText } from './StyledComponents';
import {SlClose} from 'react-icons/sl';
import {HiMenu} from "react-icons/hi"
const Navbar = ({appTheme, setAppTheme}) => {
  const [checkValue, setCheckValue] = useState('');
  const [linksVisible, setLinksVisible] = useState(false);
  const location = useLocation();
  const handelModeToggle = (e)=>{
    if(e.target.checked)
    {
      setCheckValue(true);
    }
    else
    {
      setCheckValue(false);
    }
    setAppTheme(checkValue?"dark":"light");
    localStorage.setItem("mode", checkValue?"dark":"light");
  }
  useEffect(()=>{
    setLinksVisible(false);
  },[location])
  return (
    <nav location={location}>
        <Container className='nav-content'>
          <div className={`${linksVisible? 'main-content show':'main-content'}`}>
            <NormalText className='close-icon' onClick={()=>setLinksVisible(false)}> <SlClose /> </NormalText>
            <NavMenuLinks className="main-links">
                <StyledLi><Link  to="/">Home</Link></StyledLi>
                <StyledLi><Link  to="/about/">About</Link></StyledLi>
                <StyledLi><Link  to="/projects/">Projects</Link></StyledLi>
                <StyledLi><Link  to="/contact/">Contact</Link></StyledLi>
            </NavMenuLinks>

            <div className="toggleTheme">
                <div className="switch" style={{dispay:'flex'}}>
                    <input type="checkbox" id="dark-mode-toggler" onChange={handelModeToggle} style={{opacity:0, pointerEvents:"none"}} hidden/>
                    <CustomLabel htmlFor='dark-mode-toggler'> 
                      <CustomController
                        className={appTheme==="light"?"":"dark-mode-on"} 
                      >
                        {appTheme !== "light" ? <BiSun/>:<RiMoonClearLine/>}
                      </CustomController>
                    </CustomLabel>                  
                </div>
            </div>
          </div>
          <div className='menu-icon' onClick={()=>setLinksVisible(true)}>
            <NormalText><HiMenu /></NormalText>
          </div>
        </Container>
    </nav>
  )
}

export default Navbar
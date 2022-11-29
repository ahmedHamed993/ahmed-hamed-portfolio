import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import styled  components
import Container from './Container';
import {BiSun} from "react-icons/bi";
import {RiMoonClearLine} from "react-icons/ri";
import { StyledLi, CustomLabel, CustomController } from './StyledComponents';

const Navbar = ({appTheme, setAppTheme}) => {
  const [checkValue, setCheckValue] = useState('');
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
  return (
    <nav>
        <Container>
          <ul 
              className="main-links" 
              style={{ listStyle:"none", margin:"0", padding:"0", display:"flex", justifyContent:"flex-start", alignItems:"center" }}
          >
              <StyledLi><Link  to="/">Home</Link></StyledLi>
              <StyledLi><Link  to="/about/">About</Link></StyledLi>
              <StyledLi><Link  to="/projects/">Projects</Link></StyledLi>
              <StyledLi><Link  to="/contact/">Contact</Link></StyledLi>
          </ul>

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

        </Container>
    </nav>
  )
}

export default Navbar
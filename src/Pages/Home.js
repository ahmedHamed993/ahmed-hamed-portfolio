import React, { useState } from 'react'
import styled from "styled-components";
import { socials } from '../utils/socials';
import { NormalText, StyledName } from '../components/StyledComponents';
import { motion } from 'framer-motion';
export const SocialBox = styled.div`
    background-color:${props=>props.theme.skillBoxColor};
    color:${props=>props.theme.mainTextColor};
    border-radius:50%;
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:.2s ease-in-out;
    &:hover    {
      transform:scale(1.1,1.1) translateY(-5px);
    }
`;
const Home = () => {
  const [hovered, setHovered] = useState(false);
  const mySocials = socials;
  return (
    <motion.div
      className="home" 
      initial={{x:'-100%', opacity:'0'}}
      animate={{x:'0', opacity:'1'}}
      transition={{duration:".5"}}
    
    >
        <NormalText style={{fontSize:'40px', textAlign:'center'}}>Hello,</NormalText>
        <NormalText style={{fontSize:'40px', fontWeight:'bold', textAlign:'center'}} > 
          I'm
          <StyledName 
            as={motion.span} 
            initial={{ x:'100%', opacity:0}} 
            animate={{x:'0',opacity:1}} 
            transition={{ delay :".5", duration:'.5', type:'spring', stiffness:120}} 
          >
            Ahmed Hamed
          </StyledName> 
        </NormalText>
        <NormalText style={{fontSize:'40px', textAlign:'center'}}> I'm a Frontend Developer</NormalText>
        <div className="socials" style={{display:'flex', gap:'20px', marginTop:'40px'}}>
          {
            mySocials.map((social,index) => (
              <SocialBox 
                className="social-box" 
                as={motion.div} 
                key={index} 
                initial={{y:'100px',opacity:'0'}}
                animate={{y:'0', opacity:'1'}}
                transition={{delay:.5 + index/10 , duration:'.5', type:"spring", stiffness:120}}
              >
                <a href={social['socialLink']} target="_blank" style={{fontSize:'20px'}}>{social['socialIcon']}</a>
              </SocialBox>
            ))
          }
        </div>  
    </motion.div>
  )
}

export default Home;

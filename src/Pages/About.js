import React from 'react'
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { NormalText, MainTitleSection, SkillBox, CustomBtn } from '../components/StyledComponents';
// import utils 
import {skills} from '../utils/skills';
import { motion } from 'framer-motion';
const About = () => {
    const mySkills = skills;
  return (
    <motion.div 
      className="about" 
      initial={{x:'-100%', opacity:'0'}}
      animate={{x:'0', opacity:'1'}}
      exit={{x:'-100%', opacity:'0'}}
      transition={{duration:'.5'}}
    >
        <MainTitleSection
            as={motion.h1}
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{duration:'.5', delay:'.5', type:"spring", stiffness:120}}
        >
            About me
        </MainTitleSection>
        <NormalText 
            className="about-p" 
            style={{textAlign:'center',margin:'20px 0 0', lineHeight:'30px', color:'#757575'}}
        >
            Here you will find more information about me, what I do, and my current skills mostly in terms <br/> 
            of programming and technology.
        </NormalText>
        <Container 
            className="about-text-container" 
            style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}
        >
            <div className='info' style={{flex:'1',minWidth:'330px', marginTop:'40px'}}>
                <h2 style={{marginBottom:'20px', maxWidth:'90%'}}>
                    <NormalText>Get to know me!</NormalText>
                </h2>
                <NormalText className="about-p" style={{lineHeight:'25px', color:'#757575'}}>
                    I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product.
                    Check out some of my work in the Projects section. 
                </NormalText>
                <NormalText className="about-p" style={{lineHeight:'25px', color:'#757575', marginTop:'15px'}}>
                    I'm open to Job opportunities where I can contribute, 
                    learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. 
                </NormalText>   
                <CustomBtn>
                    <Link to="/contact">Contact me</Link>
                </CustomBtn>
            </div>
            <div 
                className='skills' 
                style={{flex:'1', paddingLeft:'40px',minWidth:'330px', marginTop:'40px'}}
            >
                <h2 style={{marginBottom:'20px', maxWidth:'90%'}}>
                    <NormalText>My Skills!</NormalText>
                </h2>
                <div className="my-skills" style={{display:'flex', flexWrap:'wrap', maxWidth:'95%'}}>
                    {
                        mySkills.map((skill,index)=>(
                            <SkillBox 
                                className='skill-box' 
                                key={index}
                                as={motion.div}
                                initial={{opacity:0,x:'100%'}}
                                animate={{opacity:1, x:'0'}}
                                transition={{delay: .5 + (index / 10) , duration:'.5', type:'linear'}}
                            >
                               <NormalText> {skill}</NormalText>
                            </SkillBox>
                        ))
                    }
                </div>
            </div>
        </Container>
    </motion.div>
  )
}

export default About
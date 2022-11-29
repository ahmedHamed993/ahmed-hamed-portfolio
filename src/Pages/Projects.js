import React from 'react';
import styled from "styled-components";
import { projectsList } from '../utils/projectsList';
import Container from '../components/Container';
import { NormalText, MainTitleSection, ProjectBox, ProjectInfo } from '../components/StyledComponents';
import { motion } from 'framer-motion';
export const SkillBox = styled.div`
    background-color:${props=>props.theme.skillBoxColor};
    color:${props=>props.theme.mainTextColor};
    padding:10px;
    border-radius:5px;
    background-color:${props=>props.theme.mainBgColor}
`;
const Projects = () => {
  const myProjects = projectsList;
  return (
    <motion.div 
      className="projects" 
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
        Projects
      </MainTitleSection>
      <NormalText style={{textAlign:'center',margin:'20px 0 0', lineHeight:'30px', color:'#757575'}}>
        Here you will find some of the personal projects that I created
      </NormalText>
      <Container className="projects-container" style={{display:'grid', gap:'40px', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))'}}>
        {
          myProjects.map((project,index)=>(
            <ProjectBox href={project.url} key={index} className="project-card">
              <img src={`${project.img}`} className="proj-banner" alt={project.name} style={{maxWidth:'100%',transition:'.3s ease-in'}} loading="lazy"/>
              <ProjectInfo className="proj-info">
                <NormalText style={{textTransform:'capitalize', marginBottom:'5px', fontSize:'16px', fontWeight:'bold'}}>{project.name}</NormalText>
                {
                  project.technologyUsed.map((tech,key) => (
                    <SkillBox key={index} style={{display:'inline-block', padding:"3px 10px", marginRight:'3px', borderRadius:'10px'}}>{tech}</SkillBox>
                  ))
                }
              </ProjectInfo>
            </ProjectBox>
          ))
        }
      </Container>
    </motion.div>
  )
}

export default Projects
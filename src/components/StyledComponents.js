import styled from "styled-components";

export const MainTitleSection = styled.h1`
    text-transform:uppercase;
    letter-spacing:12px;
    position:relative;
    font-size:40px;
    color:${props => props.theme.mainTextColor};
    padding-bottom:20px;
    &::before{
        content:'';
        width:50px;
        height:4px;
        border-radius:2px;
        background-color:${props=> props.theme.secTextColor};
        position:absolute;
        bottom:0;
        left:calc( 50% - 25px);
    }
    @media (max-width:768px)
    {
      margin-top:20px;
    }
`;
export const NormalText = styled.p`
    color:${props => props.theme.mainTextColor};
`;
export const StyledLi = styled.li`
    font-size:18px;
    border-radius:5px;
    position:relative;
    transition:all .3s ease-in-out;
    overflow:hidden;
    color:${(props)=> props.theme.mainTextColor};
    @media (max-width:576px) {
      font-size:14px;
    }
    & > a 
    {
      padding:15px;
      display:flex;
      @media (max-width:576px) {
        padding:10px;
      }
    }
    &:hover::before {
        width:120%;
    }
    &::before {
        content:"";
        width:0;
        height:100%;
        border-radius:0  20px 20px 0;
        background-color:${(props) => props.theme.secBgColor};
        position:absolute;
        top:0%;
        left:0%;
        z-index:1;
        transform-origin:0% 0%;
        transition: all .3s ease-in-out;
    }
`;

export const StyledMain = styled.div`
  background-color:${(props)=>props.theme.mainBgColor};
`;
export const StyledName = styled.span`
  color:${props=>props.theme.secTextColor};
  display:inline-block;
  margin-left:15px;
  cursor:pointer;
  text-align:center;
`;
export const DownloadLink = styled.a`
  width:150px;
  height:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:1px solid ${props=>props.theme.mainTextColor};
  border-radius:30px;
  color:${props=>props.theme.mainTextColor}
  position:relative;
  overflow:hidden;
  &::before{
    content:'';
    position:absolute;
    top:0;
    left:-15px;
    z-index:-1;
    width:0%;
    height:100%;
    background-color:${props=>props.theme.secTextColor};
    transition:all .3s ease-in-out;
    transform:skewX(-30deg);
  }
  &:hover:before{
    width:180px;
  }
`;
export const CustomBtn = styled.div`
    width:150px;
    height:40px;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid ${props=>props.theme.mainTextColor};
    border-radius:30px;
    margin-top:20px;
    color:${props=>props.theme.mainTextColor};
    transition:.3s ease-in;
    &:hover 
    {
        background-color:${props => props.theme.secTextColor};
        transform:scale(1.1,1.1);
        color:${props=>props.theme.mainBgColor};
    }
`;
export const SkillBox = styled.div`
    background-color:${props=>props.theme.skillBoxColor};
    color:${props=>props.theme.mainTextColor};
    padding:10px;
    margin-right:10px;
    margin-bottom:10px;
    border-radius:5px;
`;
export const ProjectBox = styled.a`
  display:block;
  position:relative;
  overflow:hidden;
  &:hover .proj-banner
  {
    transform:scale(1.1,1.1);
  }
  &:hover .proj-info 
  {
    bottom:0;
  }
`;
export const ProjectInfo = styled.div`
  background-color:${props => props.theme.skillBoxColor};
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  bottom:-100%;
  padding:5px;
  transition:.3s ease-in;
`
export const CustomLabel = styled.label`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:15px 5px;
  height:30px;
  width:60px;
  border:1px solid ${props=>props.theme.mainTextColor};
  border-radius:20px;
  margin-left:5px;
  position:relative;
  z-index:1;
  @media (max-width:576px) {
    height:25px;
    width:50px;
    padding:10px 4px;
  }
`;
export const CustomController = styled.div`
  color:${props => props.theme.mainBgColor};
  width:25px;
  height:25px;
  background-color:${props=>props.theme.mainTextColor};
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:.3s ;
  position:absolute;
  left:5px;
  @media (max-width:576px) {
    left:2px;
    width:20px;
    height:20px;
  }
  &.dark-mode-on
  {
    left:30px;
    @media (max-width:576px) {
      left:26px;
    }
  }
`
export const ContactForm = styled.form`
  display:flex;
  flex-direction:column;
  width:100%;
  margin-top:20px;
`;
export const InputForm = styled.input`
  width:100%;
  margin-bottom:20px;
  display:block;
  padding:15px 15px;
  outline:none;
  border:none;
  font-size:16px;
  background-color:${props=> props.theme.skillBoxColor};
  color:${props=>props.theme.mainTextColor}
`
export const InputTextarea = styled.textarea`
  width:100%;
  margin-bottom:20px;
  display:block;
  padding:15px 15px;
  outline:none;
  border:none;
  background-color:${props=> props.theme.skillBoxColor};
  color:${props=>props.theme.mainTextColor};
  resize:none;
`
export const SubmitBtn = styled.button`
  width:100px;
  height:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:auto;
  background-color:${props => props.theme.secTextColor};
  color:${props => props.theme.mainBgColor};
  font-weight:bold;
  outline:none;
  border:none;
  border-radius:4px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden;
  cursor:pointer;
  div {
    top:-40px;
    height:80px;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    transition:.3s ease-in;
  }
  p 
  {
    height:40px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  &:hover > .btn-content 
  {
    top:-40px;
  }
`
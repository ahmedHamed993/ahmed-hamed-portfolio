import styled from 'styled-components';

const Container = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 30px;
    margin:0 auto;
    flex-wrap:wrap;
    @media (max-width:576px) {
        width:100%;
        padding:10px 10px;  
    }
    @media (min-width:576px) {
        width:540px;
        padding:0px 10px;  
    }
    @media (min-width:768px) {
        width:720px;
        padding:10px 20px;  
    }
    @media (min-width:992px) {
        width:960px;
    }
    @media (min-width:1200px) {
        max-width:1140px;
    }
    @media (min-width: 1400px) {
        max-width:1320px;
    }
    // container in navbar 
    &.nav-content 
    {
        height:71px;
    }
    &.nav-content .main-content 
    {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &.nav-content .close-icon
    {
        display:none;
    }
    &.nav-content .main-content 
    {
        @media (max-width:768px)
        {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background-color: ${props => props.theme.mainBgColor};
            z-index: 999;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition:.3s ease-in;
        }
    }
    &.nav-content .main-content.show 
    {
        @media (max-width:768px)
        {
            right: 0;
        }
    }
    &.nav-content .main-content .main-links 
    {
        @media (max-width:768px)
        {
            flex-direction:column;
            margin-bottom:40px;
        }
    }
    &.nav-content .main-content .close-icon 
    {
        @media (max-width:768px)
        {
            display:block;
            position:absolute;
            top:20px;
            right:20px;
            font-size:30px;
            cursor:pointer;
        }
    }
    &.nav-content .menu-icon
    {
        display:none;
        @media (max-width:768px)
        {
            font-size: 24px;
            display: block;
            margin-left: auto;
            cursor: pointer;
        }
    }
`;


export default Container;
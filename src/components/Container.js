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
        padding:0 10px;  
    }
    @media (min-width:576px) {
        width:540px;
        padding:0 10px;  
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
`;


export default Container;
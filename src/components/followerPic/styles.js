import styled from 'styled-components';


export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #66CDAA;
    margin-top: 15px;
    overflow-y: scroll; 
    @media (max-width: 430px) {
        width: 300px;
    } 
`
export const Title = styled.h1`
font-size: 20px;

font-weight: 700;
margin-top: 10px;
color: #444;
width: 100%;
text-align: center;
height: 30px;
box-shadow:  0px 2px 2px #66CDAA;
`


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content :left;
    margin-top: 10px; 
    background: rgba(255,255,255,.95);
    padding: 5px;
    box-shadow:  0px 2px 2px #66CDAA;
    p{  
        margin-left: 50px;    
        font-size: 20px;
        font-weight: 500;
        margin-top: 10px;
        color: #444;
        width: 100%;
        
        height: 30px;
    }
    
`

export const AvatarPic = styled.img`
    width: 80px;
    heigth: 80px;
    border-radius:50%;
    border: 5px solid #FFF;
    box-shadow:  0px 2px 2px #66CDAA;
`
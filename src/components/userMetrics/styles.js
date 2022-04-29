import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding:  0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`


export const NumberContainer = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: colunm;

    h1{
        font-size: 20px;
        text-align: center;
        color: #444;
        
    }

    
    h2{
        font-size: 12px;
        text-align: center;
        color: #777;
       
    }

    &:hover{
        cursor: pointer;
        background: #66CDAA;
        transition: .2s ease;
        border-radius: 10px;
    }
`
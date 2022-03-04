import styled from "@emotion/styled";

export const WcProceedingWrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    border:1px solid #ccc;
    margin:50px auto;
`

export const WcProceedingTitle = styled.h3`
     text-align: center;
     padding:20px 0;
`

export const WcProceedingMain = styled.div`
    width: 100%;
    text-align: center;
`

export const WcParticipantiv = styled.div`
    width: 50%;
    position: relative;
    cursor: pointer;
    background-color: #000;
    height:400px;
    overflow: hidden;
    transition: 0.4s;
    &.click__active{
       width: 200%;
       ::after{
           content: "WINNER!!";
           color:#fff;
           position: absolute;
           background-color: rgba(0,0,0,0.7);
           top: 20px;
           font-size: 30px;
           left: 50%;
           transform: translateX(-50%);
       }
    }
    & > h3{
        color: #fff;
        position: absolute;
        bottom:10%;
        left:50%;
        transform: translateX(-50%);
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
        padding:5px 30px;
    }
    & >img {
        width: 100%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
`

export const WcParticipantivBoard = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
`


export const WcTitle = styled.ul`
    text-align: center;
    font-size: 80px;  
    padding-top:50px;
`
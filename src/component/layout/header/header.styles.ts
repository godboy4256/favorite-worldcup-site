import styled from "@emotion/styled";

export const HeaderStyles = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: bisque;
    padding:30px 100px;
    border-bottom:1px solid #ccc;
`

export const HeaderMenu = styled.ul`
    display: flex;
    align-items: center;
    & >li{
        margin-right: 10px;
        cursor: pointer;
    }
`
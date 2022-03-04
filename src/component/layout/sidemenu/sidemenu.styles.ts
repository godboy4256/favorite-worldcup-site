import styled from "@emotion/styled";

export const SideMenuStyles = styled.ul`
    width: 100%;
    height: 100%;
    background-color: mistyrose;
    display: flex;
    justify-content: center;
    & > li{
        cursor: pointer;
        transition: .4s;
        padding: 20px 30px;
        text-align: center;
        &:hover{
            background-color: tomato;
            color: #fff;
        }
    };
   
`


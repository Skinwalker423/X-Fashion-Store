import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    
`

export const LogoContainer = styled(Link)`
        height: 100%;
        width: 70px;
        padding: 25px;
        
        @media and screen (max-width: 800px){

            display: flex;
            justify-content: center;
            align-items: center;
        }

`

export const NavLinkContainer = styled.div`

        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media screen and (max-width: 500px) {
            width: 75%
        }

`

export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;

        :hover{
            color: red;
            font-weight: 600;
        }
`




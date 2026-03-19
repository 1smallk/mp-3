import styled from "styled-components";
import {Link} from "react-router";

const NavContainer = styled.nav`
    background-color: lightblue;
    color: mintcream;
    padding: 1%;
    text-align: center;
    width: 20%;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    padding-left: 0;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly
    }
`;
const StyledLi = styled.li`
    width: 80%;
    border: 2px solid rgb(0, 111, 128);
    padding: 1%;
    margin: 30% auto;
    text-align: center;
    background-color: white;
    @media screen and (max-width: 1000px){
        width: 18%;
        padding: 1%;
        margin: 1%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: calc(2px + 1.3vw);
`;

export default function Nav() {
    return (
            <NavContainer>
                <StyledUl>
                    <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/about.html">About Me</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/experiences.html">Experiences</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/education.html">Education</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/projects.html">Projects</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/contact.html">Contact</StyledLink></StyledLi>
                </StyledUl>
            </NavContainer>
    )
}
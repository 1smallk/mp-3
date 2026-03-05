import styled from "styled-components";
import {Link} from "react-router";

const NavContainer = styled.nav`
    background-color: rgb(0, 111, 128);
    color: mintcream;
    padding: 1%;
    text-align: center;
    ul {
        list-style: none;
        padding-left: 0;
    }
    li {
        width: 80%;
        border: 2px solid rgb(0, 111, 128);
        padding: 1%;
        margin: 18% auto;
        text-align: center;
        background-color: white;
    }
`;

const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: calc(2px + 1.3vw);
`;

export default function Nav() {
    return (
        <NavMain>
            <NavContainer>
                <ul>
                    <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/about.html">About Me</StyledLink></li>
                    <li><StyledLink to="/experiences.html">Experiences</StyledLink></li>
                    <li><StyledLink to="/education.html">Education</StyledLink></li>
                    <li><StyledLink to="/projects.html">Projects</StyledLink></li>
                    <li><StyledLink to="/contact.html">Contact</StyledLink></li>
                </ul>
            </NavContainer>
        </NavMain>
    )
}
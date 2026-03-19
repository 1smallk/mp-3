import styled from "styled-components";
const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`;
const MainContainer = styled.main`
    padding: 1% 2%;
    /*at least 100vh*/
    min-height: 125vh;
    background-color: mintcream;
    text-align: center;
    width: 90%;
    height: auto;
    & * {
        margin: 0;
        box-sizing: border-box;
    }
    @media screen and (max-width: 1000px){
        width: 100%;
        flex-direction: column;
        min-height: 100vh;
        height: auto;
    }
`;
const H2 = styled.h2`
    text-align: center;
    margin: 2% 0;
    font-size: calc(5px + 4vw);
    color: rgb(0, 111, 128);
`;
const StyledPages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    h3 {
        margin: 2% 0;
        font-size: calc(2px + 2vw);
        color: black;
        padding-left: 10px;
    }
`;
const StyledP = styled.p`
    line-height: 100%;
    font-size: calc(13px + .3vw);
    padding: 2%;
`;
const StyledUl = styled.ul`
    padding-left: 0;
    @media screen and (max-width: 1000px){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly
    }
`;
const StyledLi = styled.li`
    width: 80%;
    padding: 1%;
    margin: auto;
    text-align: left;
    font-size: calc(13px + .3vw);
    @media screen and (max-width: 1000px){
        width: 18%;
        padding: 1%;
        margin: 1%;
    }
`;

export default function About() {
    return (
        <NavMain>
        <MainContainer>
            <H2>About</H2>
            <StyledPages>
                <h3>Welcome to My Personal Website</h3>
                <StyledP>Hello! I'm Sarah Malik, a Misneach Intern passionate about technology and innovation. This website
                    showcases my experiences, education, and projects. Feel free to explore and learn more about me!</StyledP>
                <h3>Fun Facts!</h3>
                <StyledUl>
                    <StyledLi>My pr is 12 pull ups</StyledLi>
                    <StyledLi>I can do an easy v5 on the Boston University climbing wall</StyledLi>
                    <StyledLi>I flew to El Salvador for $75</StyledLi>
                </StyledUl>
            </StyledPages>
        </MainContainer>
        </NavMain>
    )
}
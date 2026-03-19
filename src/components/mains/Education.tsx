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

export default function Education() {
    return (
        <>
            <title>Education | Resume </title>
        <NavMain>
            <MainContainer>
            <H2>Education</H2>
            <StyledPages>
                <StyledUl>
                    <StyledLi>MS in Finance, Boston University, 2026-2027 (Expected June 2027)</StyledLi>
                    <StyledLi>BA in Computer Science, Boston University, 2022-2026 (Expected May 2026)</StyledLi>
                    <StyledLi>GED, Hunter College High School, 2017-2022</StyledLi>
                    <StyledLi>Relevant Coursework
                        <StyledUl>
                            <StyledLi>Data Structures</StyledLi>
                            <StyledLi>Algorithms</StyledLi>
                            <StyledLi>Web Development</StyledLi>
                            <StyledLi>Database Systems</StyledLi>
                            <StyledLi>Operating Systems</StyledLi>
                            <StyledLi>Software Engineering</StyledLi>
                            <StyledLi>Full Stack Development</StyledLi>
                            <StyledLi>Combinatoric Structure</StyledLi>
                            <StyledLi>Competitive Programming</StyledLi>
                        </StyledUl>
                    </StyledLi>
                </StyledUl>
            </StyledPages>
            </MainContainer>
        </NavMain>
            </>
    )
}
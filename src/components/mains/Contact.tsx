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
`;
const StyledLi = styled.li`
    width: 80%;
    padding: 1%;
    margin: auto;
    text-align: left;
    font-size: calc(13px + .3vw);
`;

export default function Contact() {
    return (
        <>
            <title>Contact | Resume </title>
        <NavMain>
            <MainContainer>
            <H2>Contact Information</H2>
            <StyledPages>
                <StyledUl>
                    <StyledLi>Phone: 646-981-8949</StyledLi>
                    <StyledLi>Email: smallk@bu.edu</StyledLi>
                    <StyledLi>Messenger Pigeon: Hedwig</StyledLi>
                </StyledUl>
            </StyledPages>
            </MainContainer>
        </NavMain>
            </>
    )
}
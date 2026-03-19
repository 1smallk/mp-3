import styled from "styled-components";

const HeaderContainer = styled.header`
    padding: 1%;
    background-color: rgb(0, 111, 128);
    color: mintcream;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;
const StyledH1 = styled.h1`
    text-align: left;
    margin: 2% 0;
    font-size: calc(6px + 4vw);
    color: mintcream;
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;
const StyledP = styled.p`
    text-align: left;
    margin: 2% 0;
    font-size: calc(2px + 2vw);
    color: mintcream;
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <StyledH1>Sarah Malik</StyledH1>
            <StyledP>My Online Resume</StyledP>
        </HeaderContainer>
    )
}
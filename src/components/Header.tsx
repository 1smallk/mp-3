import styled from "styled-components";

const HeaderContainer = styled.header`
    padding: 1%;
    background-color: rgb(0, 111, 128);
    color: mintcream;   
    h1 {
        text-align: center;
        margin: 2% 0;
        font-size: calc(6px + 4vw);
        color: rgb(0, 111, 128);
    }
    p {
        text-align: center;
        margin: 2% 0;
        font-size: calc(3px + 3vw);
        color: rgb(0, 111, 128);
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>Sarah Malik</h1>
            <p>My Online Resume</p>
        </HeaderContainer>
    )
}
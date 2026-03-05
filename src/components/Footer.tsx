import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: rgb(0, 111, 128);
    color: mintcream;
    padding: 1%;
    text-align: center;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <p>All Rights Reserved by Sarah Malik <a href=""> Credits</a> &#169;</p>
            <div id="time-date"></div>
        </FooterContainer>
    )
}
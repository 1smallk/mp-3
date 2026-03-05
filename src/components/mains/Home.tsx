import styled from "styled-components";

const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const MainContainer = styled.main`
    padding: 1% 2%;
    /*at least 100vh*/
    min-height: 125vh;
    background-color: mintcream;
    text-align: center;
    width: 70%;
    height: auto;
`;

const H2 = styled.h2`
    text-align: center;
    margin: 2% 0;
    font-size: calc(5px + 4vw);
    color: rgb(0, 111, 128);
`
const ThisOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 5% 0;
`;

const P = styled.p`
    line-height: 100%;
    font-size: calc(13px + .3vw);
    padding: 2%;
`;

const Img = styled.img`
    max-width: 40%;
`;

export default function Home() {
    return (
        <NavMain>
        <MainContainer>
            <H2>Home</H2>
            <ThisOne>
                <Img src="IMG_5418.jpg" alt="Sarah Malik"/>
                    <P>
                        My name is Sarah Malik, a Misneach Intern passionate about technology and innovation. Feel free to explore and learn more about me!
                    </P>
            </ThisOne>
            <ThisOne>
                Welcome to my website, here you will find my
                <strong><em><u>Education</u></em></strong>
                and my
                <strong><em><u>Experiences</u></em></strong>
                as well as other information that might be
                of interest to you.
            </ThisOne>
        </MainContainer>
        </NavMain>
    )
}
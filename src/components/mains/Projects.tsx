import styled from "styled-components";
import {useState} from "react";

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
const StyledP = styled.p`
    line-height: 100%;
    font-size: calc(13px + .3vw);
    padding: 2%;
`;
const StyledInput = styled.input`
    background-color: mintcream;
    border: 2px solid black;
`;
const StyledButton = styled.button`
`;
export default function Projects(){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);
    const Color = output < 0 ? "red" : "black";
    function addition(){
        setOutput(Number(input1)+Number(input2));
    }
    function subtraction(){
        setOutput(Number(input1)-Number(input2));
    }
    function multiplication(){
        setOutput(Number(input1)*Number(input2));
    }
    function division() {
        setOutput(Number(input1)/Number(input2));
    }
    function power(){
        let result = 1;
        for (let i = 0; i < Number(input2); i++) {
            result *= Number(input1);
        }
        setOutput(result);
    }
    function clear(){
        setInput1("");
        setInput2("");
        setOutput(0);
    }

    return (
        <>
        <title>Projects | Resume </title>
    <NavMain>
        <MainContainer>
                <H2>Calculator</H2>
                <StyledInput id={`first-number`}
                       value={input1}
                       placeholder={`Enter a number`}
                       onChange={(e) => setInput1(e.target.value)}/>
                <StyledButton onClick={addition}>+</StyledButton>
                <StyledButton onClick={subtraction}>-</StyledButton>
                <StyledButton onClick={multiplication}>*</StyledButton>
                <StyledButton onClick={division}>/</StyledButton>
                <StyledButton onClick={power}>**</StyledButton>
                <StyledButton onClick={clear}>C</StyledButton>
                <StyledInput id={`second-number`}
                       value={input2}
                       placeholder={`Enter a number`}
                       onChange={(e) => setInput2(e.target.value)}/>
                <StyledP style={{ color: Color }}>{output}</StyledP>
            </MainContainer>
        </NavMain>
        </>
    )
}
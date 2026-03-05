import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
//import Education from "./components/mains/Education.tsx";
import Home from "./components/mains/Home.tsx";
//import Experiences from "./components/mains/Experiences.tsx";
//import Certifications from "./components/mains/Certifications.tsx";
//import References from "./components/mains/References.tsx";
//import Projects from "./components/mains/Projects.tsx";
import styled from "styled-components";

const StyledWrapper=styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: burlywood;
`;

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

function Root(){
    return(
        <StyledWrapper>
            <Header/>
            <StyledContainer>
                <Nav/>
                <Routes>
                    <Route
                        path={`/`}
                        element={<Home/>}
                    />
                    {/*<Route*/}
                    {/*    path={`/education/education.html`}*/}
                    {/*    element={<Education/>}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path={`/employment/employment.html`}*/}
                    {/*    element={<Experiences/>}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path={`/achievements/achievements.html`}*/}
                    {/*    element={<Certifications/>}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path={`/references/references.html`}*/}
                    {/*    element={<References/>}*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path={`/documents/projects.html`}*/}
                    {/*    element={<Projects/>}*/}
                    {/*/>*/}

                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledWrapper>
    );
}

const router=createBrowserRouter(
    [{path:"*",Component:Root}]
)


export default function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
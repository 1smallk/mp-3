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
        min-height: 125vh;
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
        flex-direction: column;
        justify-content: space-evenly;
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

export default function Experiences() {
    return (
        <>
            <title>Experiences | Resume </title>
        <NavMain>
            <MainContainer>
                <H2>Experiences</H2>
                <StyledPages>

                    <h3>Work Experiences</h3>

                    <StyledUl>
                        <StyledLi>
                            Misneach, University Talent Deal Flow Coordinator: Boston, MA Jan 2026 to Aug 2026
                            <StyledUl>
                                <StyledLi>
                                    Source deal flow from university founder talent to bring to incubator to receive equity in exchange for seed funding
                                </StyledLi>
                                <StyledLi>
                                    Conduct market research with university founders to determine their unique needs that can be met by an incubator
                                </StyledLi>
                                <StyledLi>
                                    Discuss edits to early stage incubator initiative material
                                </StyledLi>
                                <StyledLi>
                                    Coordinate and deliver feedback to early stage startup teams with other managing partners of the incubator
                                </StyledLi>
                            </StyledUl>
                        </StyledLi>

                        <StyledLi>
                            Achillea Peer Tutoring, Founder & Executive Director: New York, NY Oct 2019 to Jun 2025
                            <StyledUl>
                                <StyledLi>
                                    Structured $200K in funding agreements with 12+ child welfare agencies; conducted financial modeling and scenario analysis to guide budgets, sustainability, and capital allocation decisions
                                </StyledLi>
                                <StyledLi>
                                    Measured cost per student served, program ROI, and funding efficiency metrics using quantitative analysis to demonstrate KPI organizational impact and support investor/funder reporting
                                </StyledLi>
                                <StyledLi>
                                    Built governance and financial reporting systems to ensure compliance, improve transparency, and support scale-up to 250+ students and 13 employees
                                </StyledLi>
                                <StyledLi>
                                    Developed multi-year cash flow forecasts and risk assessments, evaluating funding scenarios to inform strategic growth planning
                                </StyledLi>
                            </StyledUl>
                        </StyledLi>

                        <StyledLi>
                            Eyethena, Product Management Intern: Boston, MA May 2024 to Aug 2024
                            <StyledUl>
                                <StyledLi>
                                    Led the design and development of a personalized diet planning app targeting women experiencing menopause
                                </StyledLi>
                                <StyledLi>
                                    Interviewed nutritionists, healthcare professionals, and potential users to define product requirements and translated them into data-driven specifications, leveraging market research and stakeholder analysis
                                </StyledLi>
                            </StyledUl>
                        </StyledLi>
                    </StyledUl>

                    <h3>Developmental Experiences</h3>

                    <StyledUl>
                        <StyledLi>
                            Blackstone LaunchPad: Cultivated leadership and growth mindset approaches consistent with Blackstone’s financial mission and values
                        </StyledLi>
                        <StyledLi>
                            Ernst and Young: Built technical finance skills in predictive analytics, data visualization, cloud computing and AI tools
                        </StyledLi>
                        <StyledLi>
                            HelloFinance: Engaged with 20+ financial firms on careers, industry insights, and panels. Gained practical insights into market trends, client advisory, capital allocation, and investment decision-making processes, including how firms assess growth opportunities, manage risk, and adapt to evolving economic conditions
                        </StyledLi>
                        <StyledLi>
                            Boston University: Grading Software Engineering course and supporting instruction after earning top marks
                        </StyledLi>
                    </StyledUl>

                </StyledPages>
            </MainContainer>
        </NavMain>
            </>
    );
}

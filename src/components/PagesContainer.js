import styled from "styled-components";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";

const PagesContainer = styled.div`
position: relative;
padding-top: 100px;
padding-left: 185px;
width: 100vw;
height: calc(100vh - 100px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3vh;
background-color: ${colors.background};
font-family: ${fonts.text};

@media (max-width: 760px) {
    padding-left: 0px;
}
`

export default PagesContainer
import styled from "styled-components";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";

const PagesContainer = styled.div`
position: relative;
padding: 150px 235px;
width: 100vw;
height: calc(100vh - 100px);
display: flex;
align-items: ${props => props.books.length === 0 ? 'center' : 'flex-start'};
justify-content: ${props => props.books.length === 0 ? 'center' : 'flex-start'};
background-color: ${colors.background};
font-family: ${fonts.text};

@media (max-width: 760px) {
    padding: 150px 50px;
}
`

export default PagesContainer
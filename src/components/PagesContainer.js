import styled from "styled-components";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";

const PagesContainer = styled.div`
position: relative;
padding: ${props => props.books.length === 0 ? '0 50px 50px 235px' : '150px 50px 50px 235px'};
width: 100vw;
height: 100vh;
display: flex;
align-items: ${props => props.books.length === 0 ? 'center' : 'flex-start'};
justify-content: ${props => props.books.length === 0 ? 'center' : 'flex-start'};
background-color: ${colors.background};
font-family: ${fonts.text};

@media (max-width: 760px) {
    padding: ${props => props.books.length === 0 ? '0 50px 50px 50px' : '150px 50px 50px 50px'};
}
`

export default PagesContainer
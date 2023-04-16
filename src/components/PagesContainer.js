import styled from "styled-components";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";

const PagesContainer = styled.div`
position: relative;
padding: ${props => props.books.length === 0 ? '0 50px 50px 235px' : '160px 50px 50px 235px'};
width: 100vw;
height: 100vh;
display: flex;
align-items: ${props => props.books.length === 0 ? 'center' : 'flex-start'};
justify-content: ${props => props.books.length === 0 ? 'center' : 'flex-start'};
background-color: ${colors.background};
font-family: ${fonts.text};

@media (max-width: 760px) {
    padding: ${props => props.books.length === 0 ? '0 50px 50px 50px' : '160px 50px 50px 50px'};
}

button {
    position: absolute;
    top: 115px;
    width: 200px;
	height: 30px;
	border-radius: 7px;
	border: none;
    font-family: ${fonts.text};
    font-size: 15px;
    padding: 0 14px;
    box-sizing: border-box;
    background-color: ${colors.mediumBlue};
    color: ${colors.white};
    font-weight: 500;
    cursor: ${props => props.selectedBooks.length === 0 ? 'auto' : 'pointer'};
    opacity: ${props => props.selectedBooks.length === 0 ? 0 : 1};
}
`

export default PagesContainer
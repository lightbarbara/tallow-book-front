import styled from "styled-components"
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1vh;
cursor: pointer;

input, button {
	width: 70vw;
	height: 5vh;
	border-radius: 7px;
	border: none;
    font-family: ${fonts.text};
    font-size: 1.75vh;
    padding: 0 14px;
    box-sizing: border-box
}

input, input::placeholder {
    font-weight: 400;
    color: ${colors.text};
}

button {
    background-color: ${colors.mediumBlue};
    color: ${colors.white};
    font-weight: 700;
}
`

export default Form
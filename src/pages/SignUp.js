import { Link } from "react-router-dom"
import styled from "styled-components"
import FormSignUp from "../components/FormSignUp"
import logo from '../assets/logo.png'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

export default function SignUp() {

    return (
        <Container>
            <div>
                <img src={logo} alt='logo' />
                <Titulo>
                    <h1>Tallow Book</h1>
                    <h2>Um destino ao seu livro</h2>
                </Titulo>
            </div>
            <FormSignUp />
            <Link to={`/`}><p>Já possui uma conta? Entre aqui!</p></Link>
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3vh;
background-color: ${colors.background};

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 300px;
    }
}

a {
    text-decoration: none;
}

p {
    height: 18px;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    color: ${colors.darkBlue};
    text-decoration: none;
}
`

const Titulo = styled.div`
font-family: ${fonts.title};
text-align: center;
font-weight: 400;
line-height: 50px;
color: ${colors.darkBlue};

h1 {
    font-size: 36px;
}

h2 {
    font-size: 20px;
}
`
import styled from 'styled-components'
import logo from '../assets/logo.png'
import FormSignIn from '../components/FormSignIn'
import { Link } from "react-router-dom"
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

export default function SignIn() {

    return (
        <Container>
            <div>
                <img src={logo} alt='logo' />
                <Titulo>
                    <h1>Tallow Book</h1>
                    <h2>Um destino ao seu livro</h2>
                </Titulo>
            </div>
            <FormSignIn />
            <Link to={`/sign-up`}><p>Primeira vez? Cadastre-se!</p></Link>
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
}

a {
    text-decoration: none;
}

p {
    height: 18px;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    color: ${colors.darkGreen};
    text-decoration: none;
}
`

const Titulo = styled.div`
font-family: ${fonts.title};
text-align: center;
font-weight: 400;
line-height: 50px;
color: ${colors.darkGreen};

h1 {
    font-size: 36px;
}

h2 {
    font-size: 20px;
}
`
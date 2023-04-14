import styled from "styled-components"
import { colors } from "../constants/colors"
import { Link } from "react-router-dom"

export default function SideMenu() {
    return (
        <Container>
            <Link to='/my-books'><p>Meus livros</p></Link>
            <Link to='/register-book'><p>Cadastrar livros</p></Link>
            <Link to='/cart'><p>Carrinho</p></Link>
            <Link to='/history'><p>Histórico</p></Link>
            <p>Sair</p>
        </Container>
    )
}

const Container = styled.div`
height: calc(100vh - 100px);
width: 185px;
position: absolute;
left: 0;
top: 100px;
display: flex;
flex-direction: column;
padding: 10px 0 0 20px;
color: ${colors.white};
font-size: 20px;
font-weight: 500;
box-sizing: border-box;

a {
    text-decoration: none;
}

p {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid ${colors.darkBlue};
    color: ${colors.darkBlue};
    cursor: pointer;
}

@media (max-width: 760px) {
    visibility: hidden;
}
`
import styled from "styled-components"
import { colors } from "../constants/colors"
import logo from '../assets/logo.png'
import { fonts } from "../constants/fonts"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function TopBar() {

    const { user } = useContext(UserContext)

    function searchBooks() {

    }

    return (
        <Container>
            <img src={logo} alt='logo' />
            <input
                onChange={searchBooks}
                placeholder="Pesquisar livro"
            />
            <div>
                <p>{user.name}</p>
                <img src={user.avatar} alt='avatar' />
            </div>
        </Container>
    )
}

const Container = styled.div`
position: fixed;
z-index: 1;
top: 0;
width: 100vw;
height: 100px;
background-color: ${colors.mediumBlue};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 30px;
box-sizing: border-box;
color: ${colors.white};
font-family: ${fonts.text};

img, div {
    width: 180px;
}

div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        }
}

input {
	width: 40vw;
	height: 35px;
	border-radius: 7px;
	border: none;
    font-family: ${fonts.text};
    font-size: 13px;
    padding: 0 14px;
    box-sizing: border-box;

    @media (max-width: 760px) {
        display: none;
    }
}

input, input::placeholder  {
    font-weight: 400;
    color: ${colors.text};
}
`
import styled from "styled-components"
import { colors } from "../constants/colors"
import logo from '../assets/logo.png'
import { fonts } from "../constants/fonts"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"
import { DebounceInput } from "react-debounce-input"

export default function TopBar({ search, books, setBooks, searched, setSearched }) {

    const { token, user } = useContext(UserContext)

    let searchedBooks = ''

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function searchBooks(name) {
        try {

            const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/books/${name}`, config)
            console.log(res)
            setBooks(res.data)
            setSearched(!searched)

        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    return (
        <Container search={search}>
            <img src={logo} alt='logo' />
            <DebounceInput
                debounceTimeout={300}
                placeholder="Pesquisar livro"
                disabled={!search}
                type="search"
                onChange={(e) => {
                    searchedBooks = e.target.value
                    if (searchedBooks.length > 0) {
                        searchBooks(searchedBooks)
                    }
                    if (searchedBooks.length === 0) {
                        searchBooks('')
                    }
                }}
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
z-index: 2;
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
    opacity: ${props => props.search ? 1 : 0};

    @media (max-width: 760px) {
        display: none;
    }
}

input, input::placeholder  {
    font-weight: 400;
    color: ${colors.text};
}
`
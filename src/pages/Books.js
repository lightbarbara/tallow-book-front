import { useContext, useEffect, useState } from "react"
import BookList from "../components/BookList"
import TopBar from "../components/TopBar"
import SideMenu from "../components/SideMenu"
import OutsideContainer from "../components/OutsideContainer"
import PagesContainer from "../components/PagesContainer"
import { UserContext } from "../contexts/UserContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Books() {

    const [books, setBooks] = useState([])

    const { token, selectedBooks, setSelectedBooks } = useContext(UserContext)

    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function sendToCart(e) {
        e.preventDefault()

        try {

            await axios.post(`${process.env.REACT_APP_BACK_END_URL}/cart`, { books: selectedBooks }, config)

            setSelectedBooks([])

        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    useEffect(() => {

        const getBooks = async () => {
            try {

                const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/books`, config)
                setBooks(res.data)

            } catch (err) {
                alert(err.response.data.message)
                navigate('/')
            }
        }

        getBooks()

    }, [selectedBooks])

    return (
        <OutsideContainer>
            <TopBar />
            <PagesContainer books={books} selectedBooks={selectedBooks}>
                <SideMenu />
                <button disabled={selectedBooks.length === 0 ? true : false} onClick={sendToCart}>Adicionar ao carrinho</button>
                {books.length === 0 ? <p>Não existem livros disponíveis para troca</p> : <BookList books={books} selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />}
            </PagesContainer>
        </OutsideContainer>
    )
}
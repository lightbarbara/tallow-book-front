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

    const { token } = useContext(UserContext)

    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
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

    }, [])

    return (
        <OutsideContainer>
            <TopBar />
            <PagesContainer books={books}>
                <SideMenu />
                {books.length === 0 ? <p>Não existem livros disponíveis para troca</p> : <BookList books={books} />}
            </PagesContainer>
        </OutsideContainer>
    )
}
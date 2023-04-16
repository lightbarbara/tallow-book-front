import { useContext, useEffect, useState } from "react";
import OutsideContainer from "../components/OutsideContainer";
import PagesContainer from "../components/PagesContainer";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import BookList from "../components/BookList";
import { useNavigate } from "react-router-dom";

export default function MyBooks() {

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

                const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/my-books`, config)
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
                {books.length === 0 ? <p>Você ainda não cadastrou nenhum livro na plataforma</p> : <BookList books={books} />}
            </PagesContainer>
        </OutsideContainer>
    )
}
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

    const [deleted, setDeleted] = useState(false)

    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function setSelectedBooks() {
        return
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

    }, [deleted])

    return (
        <OutsideContainer>
            <TopBar search={false} />
            <PagesContainer books={books} selectedBooks={[]}>
                <SideMenu />
                {books.length === 0 ? <p>Você ainda não cadastrou nenhum livro na plataforma</p> : <BookList books={books} selectedBooks={[]} setSelectedBooks={setSelectedBooks} type={'myBooks'} deleted={deleted} setDeleted={setDeleted} />}
            </PagesContainer>
        </OutsideContainer>
    )
}
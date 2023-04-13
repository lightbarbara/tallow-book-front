import { useContext, useState } from "react";
import OutsideContainer from "../components/OutsideContainer";
import PagesContainer from "../components/PagesContainer";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import BookList from "../components/BookList";

export default function History() {

    const [books, setBooks] = useState([])

    const { token } = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useState(() => {

        const getHistory = async () => {
            try {

                const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/history`, config)
                setBooks(res.data.history)

            } catch (err) {
                alert(err.response.data.message)
            }
        }

        getHistory()

    }, [])

    return (
        <OutsideContainer>
            <TopBar />
            <PagesContainer books={[]}>
                <SideMenu />
                {books.length === 0 ? <p>Você ainda não comprou nenhum livro</p> : <BookList books={books} />}
            </PagesContainer>
        </OutsideContainer>
    )
}
import { useContext, useEffect, useState } from "react";
import OutsideContainer from "../components/OutsideContainer";
import PagesContainer from "../components/PagesContainer";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import BookList from "../components/BookList";
import { useNavigate } from "react-router-dom";

export default function Cart() {

    const [books, setBooks] = useState([])

    const { token } = useContext(UserContext)

    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const getCart = async () => {
            try {

                const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/cart`, config)
                console.log(res.data)
                const newBooks = res.data.filter(b => b.book)
                console.log(newBooks)
                setBooks(res.data)

            } catch (err) {
                alert(err.response.data.message)
                navigate('/')
            }
        }

        getCart()

    }, [])

    return (
        <OutsideContainer>
            <TopBar />
            <PagesContainer books={books} selectedBooks={[]}>
                <SideMenu />
                {books.length === 0 ? <p>Você ainda não possui nada em seu carrinho</p> : <BookList books={books} selectedBooks={[]} />}
            </PagesContainer>
        </OutsideContainer>
    )
}
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

    const [deleted, setDeleted] = useState(false)

    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function buyBooks(e) {
        e.preventDefault()

        try {

            await axios.post(`${process.env.REACT_APP_BACK_END_URL}/finish-cart`, {}, config)
            setBooks([])

        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    function setSelectedBooks() {
        return
    }

    useEffect(() => {

        const getCart = async () => {
            try {

                const res = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/cart`, config)
                setBooks(res.data)

            } catch (err) {
                alert(err.response.data.message)
                navigate('/')
            }
        }

        getCart()

    }, [deleted])

    return (
        <OutsideContainer>
            <TopBar search={false} />
            <PagesContainer books={books} selectedBooks={books}>
                <SideMenu />
                <button
                    disabled={books.length === 0 ? true : false}
                    onClick={buyBooks}>
                    Fazer compra
                </button>
                {books.length === 0 ? <p>Você ainda não possui nada em seu carrinho</p> : <BookList books={books} selectedBooks={[]} setSelectedBooks={setSelectedBooks} type={'cart'} deleted={deleted} setDeleted={setDeleted} />}
            </PagesContainer>
        </OutsideContainer>
    )
}
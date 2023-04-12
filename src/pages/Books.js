import { useState } from "react"
import BookList from "../components/BookList"
import TopBar from "../components/TopBar"
import SideMenu from "../components/SideMenu"
import OutsideContainer from "../components/OutsideContainer"
import PagesContainer from "../components/PagesContainer"

export default function Books() {

    const [books, setBooks] = useState([])

    return (
        <OutsideContainer>
            <TopBar />
            <PagesContainer>
                <SideMenu />
                {books.length === 0 ? <p>Não existem livros disponíveis para troca</p> : <BookList />}
            </PagesContainer>
        </OutsideContainer>
    )
}
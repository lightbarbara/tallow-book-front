import styled from "styled-components"
import Book from "./Book"

export default function BookList({ books, selectedBooks, setSelectedBooks }) {

    return (
        <Container>
            {books.map(b => <Book b={b} selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} />)}
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 30px;
`
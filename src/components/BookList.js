import styled from "styled-components"
import Book from "./Book"

export default function BookList({ books }) {
    return (
        <Container>
            {books.map(b => <Book b={b} />)}
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 30px;
`
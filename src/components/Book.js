import styled from "styled-components"
import { colors } from "../constants/colors"
import { useEffect } from "react"
import { useState } from "react"

export default function Book({ b, selectedBooks, setSelectedBooks }) {

    const [isSelected, setIsSelected] = useState(selectedBooks.includes(b.id))

    function selectBook(id) {
        if (!selectedBooks.includes(id)) {
            setSelectedBooks([...selectedBooks, id])
        } else {
            const books = [...selectedBooks]
            const index = books.indexOf(id)
            books.splice(index, 1)
            setSelectedBooks([...books])
        }
    }

    useEffect(() => {
        setIsSelected(selectedBooks.includes(b.id))
    }, [selectedBooks])

    return (
        <BookContainer onClick={() => selectBook(b.id)} isSelected={isSelected} >
            <div>
                <img src={b.image} alt='book' />
                <p>{`Resumo: ${b.description}`}</p>
            </div>
            <div>
                <p>{b.name}</p>
                <p>{`Páginas: ${b.pages}`}</p>
                <p>{`Preço: R$ ${b.price}`}</p>
            </div>
        </BookContainer>
    )
}

const BookContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: ${colors.lightBlue};
height: 350px;
width: 270px;
border-radius: 10px;
border: ${props => props.isSelected ? '1px solid green' : ''};

div:nth-child(1) {
    height: 220px;
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

img {
    position: absolute;
    z-index: 1;
    height: 220px;
    width: 150px;
    object-fit: cover;
    transition: opacity .2s linear;
}

div:nth-child(1)>p {
    position: absolute;
    width: 150px;
    word-break: break-all;
}

img:hover {
    opacity: 0;
}

div:nth-child(1)>p:hover {
    opacity: 1;
}

div:nth-child(2) {
    height: 90px;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
`
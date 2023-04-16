import styled from "styled-components"
import { colors } from "../constants/colors"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { TrashOutline } from 'react-ionicons'
import axios from "axios"
import { UserContext } from "../contexts/UserContext"

export default function Book({ b, selectedBooks, setSelectedBooks, type, deleted, setDeleted }) {

    const [isSelected, setIsSelected] = useState(selectedBooks.includes(b.id))

    const { token } = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

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

    async function deleteBook(type, id) {
        if (type === 'myBooks') {
            try {
                await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/book/${id}`, config)
            } catch (err) {
                console.log(err)
                alert(err.response.data.message)
            }
        }
        if (type === 'cart') {
            try {
                await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/cart/book/${id}`, config)
            } catch (err) {
                console.log(err)
                alert(err.response.data.message)
            }
        }
        setDeleted(!deleted)
    }

    useEffect(() => {
        setIsSelected(selectedBooks.includes(b.id))
    }, [selectedBooks])

    return (
        <BookContainer bookStatus={b.status} onClick={() => selectBook(b.id)} isSelected={isSelected} type={type} >
            <div>
                <img src={b.image} alt='book' />
                <p>{`Resumo: ${b.description}`}</p>
            </div>
            <div>
                <p>{b.name}</p>
                <p>{`Páginas: ${b.pages}`}</p>
                <p>{`Preço: R$ ${b.price}`}</p>
            </div>
            <div>
                <TrashOutline
                    color={'red'}
                    title={'delete'}
                    height="20px"
                    width="20px"
                    onClick={() => {
                        deleteBook(type, b.id)
                    }}
                />
            </div>
        </BookContainer>
    )
}

const BookContainer = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: center;
justify-content: space-around;
background-color: ${colors.lightBlue};
height: 350px;
width: 270px;
border-radius: 10px;
border: ${props => props.isSelected ? '1px solid green' : ''};
opacity: ${props => props.type === 'myBooks' && props.bookStatus === 'UNAVAILABLE' ? 0.5 : 1 };

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

div:nth-child(3) {
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: ${props => ['cart', 'myBooks'].includes(props.type) ? 1 : 0};
    cursor: ${props => ['cart', 'myBooks'].includes(props.type) ? 'pointer' : 'auto'};
}
`
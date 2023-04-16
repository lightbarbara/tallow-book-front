import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from './Form'
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext.js"
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";
import styled from "styled-components";

export default function FormRegisterBook() {

    const { token } = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const [form, setForm] = useState({
        name: '',
        image: '',
        pages: '',
        year: '',
        description: '',
        edition: '',
        price: ''
    })

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function registerBook(e) {
        e.preventDefault()

        try {

            await axios.post(`${process.env.REACT_APP_BACK_END_URL}/register-book`, form, config)
            navigate('/my-books')

        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <Form onSubmit={registerBook}>
            <Titulo>Registre seu livro</Titulo>
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleForm}
                placeholder="Nome"
                required
            />
            <input
                name="author"
                type="text"
                value={form.author}
                onChange={handleForm}
                placeholder="Autor"
                required
            />
            <input
                name="image"
                type="url"
                value={form.image}
                onChange={handleForm}
                placeholder="Imagem"
                required
            />
            <input
                name="pages"
                type="number"
                value={form.pages}
                onChange={handleForm}
                placeholder="Páginas"
                required
            />
            <input
                name="year"
                type="number"
                value={form.year}
                onChange={handleForm}
                placeholder="Ano"
                required
            />
            <input
                name="description"
                type="text"
                value={form.description}
                onChange={handleForm}
                placeholder="Descrição"
                required
            />
            <input
                name="edition"
                type="number"
                value={form.edition}
                onChange={handleForm}
                placeholder="Edição"
                required
            />
            <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleForm}
                placeholder="Preço"
                required
            />
            <button type="submit">Registrar livro</button>
        </Form>
    )

}

const Titulo = styled.div`
font-family: ${fonts.title};
text-align: center;
font-weight: 400;
line-height: 50px;
color: ${colors.darkBlue};
font-size: 36px;
`
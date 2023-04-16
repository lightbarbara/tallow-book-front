import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from './Form'
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext.js"
import { useEffect } from "react";

export default function FormSignIn() {

    const { setToken, setUser, setAndPersistUser } = useContext(UserContext)
    const userOnLocalStorage = JSON.parse(localStorage.getItem('user'))

    const navigate = useNavigate();

    useEffect(() => {
        if (userOnLocalStorage) {
            setUser(userOnLocalStorage.user)
            setToken(userOnLocalStorage.token)
            navigate('/books')
        }
    }, [])

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function login(e) {
        e.preventDefault()

        try {

            const res = await axios.post(`${process.env.REACT_APP_BACK_END_URL}`, form)
            setAndPersistUser(res)
            setToken(res.data.token)
            setUser(res.data.user)
            navigate('/books')

        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    return (
        <Form onSubmit={login}>
            <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleForm}
                placeholder="Email"
                required />
            <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleForm}
                placeholder="Senha"
                required
            />
            <button type="submit">Entrar</button>
        </Form>
    )

}
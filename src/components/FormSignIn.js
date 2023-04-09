import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { urlBack } from "../constants/urls";
import Form from './Form'
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext.js"

export default function FormSignIn() {

    const { setToken } = useContext(UserContext)

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function login(e) {
        e.preventDefault()

        try {
            const res = await axios.post(`${urlBack}`, form)
            setToken(res.data.token)
            navigate('/home')
        } catch (err) {
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
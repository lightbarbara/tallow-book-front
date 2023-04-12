import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function FormSignUp() {

    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [form, setForm] = useState({
        name: '',
        email: '',
        avatar: '',
        password: ''
    })

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function cadastro(e) {
        e.preventDefault()

        if (form.password !== passwordConfirm) {
            alert('As senhas precisam ser iguais')
            return
        }

        try {
            await axios.post(`${process.env.REACT_APP_BACK_END_URL}/sign-up`, form)

            navigate('/products')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    return (
        <Form onSubmit={cadastro}>
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleForm}
                placeholder="Nome"
                required />
            <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleForm}
                placeholder="Email"
                required />
            <input
                name="avatar"
                type="url"
                value={form.avatar}
                onChange={handleForm}
                placeholder="Avatar"
                required />
            <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleForm}
                placeholder="Senha"
                required
            />
            <input
                type='password'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder='Confirme a senha'
                required />
            <button type="submit">Cadastre-se</button>
        </Form>
    )

}
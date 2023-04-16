import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../assets/GlobalStyle';
import { UserContext } from '../contexts/UserContext';
import SignIn from '../pages/SignIn';
import { useState } from 'react';
import SignUp from '../pages/SignUp';
import Books from '../pages/Books';
import MyBooks from '../pages/MyBooks';
import RegisterBook from '../pages/RegisterBook';
import Cart from '../pages/Cart';
import History from '../pages/History';

function App() {

  const userOnLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user : ''
  const [user, setUser] = useState(userOnLocalStorage)

  const tokenOnLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : ''
  const [token, setToken] = useState(tokenOnLocalStorage)

  const [selectedBooks, setSelectedBooks] = useState([])

  function setAndPersistUser(res) {
    localStorage.setItem('user', JSON.stringify(res.data))
    setUser(res.data.user)
    setToken(res.data.token)
  }

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser, setAndPersistUser, selectedBooks, setSelectedBooks }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/books' element={<Books />} />
          <Route path='/my-books' element={<MyBooks />} />
          <Route path='/register-book' element={<RegisterBook />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
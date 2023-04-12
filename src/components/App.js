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

  const [user, setUser] = useState({})
  const [token, setToken] = useState('')

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
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

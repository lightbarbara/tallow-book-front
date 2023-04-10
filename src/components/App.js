import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../assets/GlobalStyle';
import { UserContext } from '../contexts/UserContext';
import SignIn from '../pages/SignIn';
import { useState } from 'react';
import SignUp from '../pages/SignUp';

function App() {

  const [token, setToken] = useState('')

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

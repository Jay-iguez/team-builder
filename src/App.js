import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { HeadingDiv } from './styledComponents/styled'
import { useState } from 'react';
import Application from './components/Application'
import Login from './components/Login';
import Home from './components/Home';
import Admin from './protectedRoute/Admin';
import Spooky from './components/Spooky';
import Protected from './protectedRoute/Protected';

const mainBody = document.querySelector("body")
mainBody.style.background = "#bea483"

const all = document.querySelectorAll("*")
all.forEach((element) => {
  element.style.maxWidth = "100%"
})


function App() {
  const [pageType, setPageType] = useState('Home Page')
  const [tokenName, setTokenName] = useState(false)

  const currentPageState = {pageType: pageType, setPageType: setPageType}
  const tokenState = {tokenName: tokenName, setTokenName: setTokenName}

  return (
    <BrowserRouter>
      <HeadingDiv>
        <h1>The Woofing Bean {pageType}:</h1>
        <nav id='navigation'>
          <Link to={'/'} onClick={() => { setPageType('Home Page') }}>Home</Link>
          <Link to={'/application'}>Application</Link>
          <Link to={'/login'}>Login Page</Link>
        </nav>
      </HeadingDiv>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/application'} element={<Application currentPageState={currentPageState} />}></Route>
        <Route path={'/login'} element={<Login currentPageState={currentPageState} tokenState={tokenState} />}></Route>
        
        <Route element={<Protected tokenName={tokenName} />}>
          <Route path={'/adminspace'} element={<Admin currentPageState={currentPageState} />}></Route>
          <Route path={'/spooky'} element={<Spooky currentPageState={currentPageState} />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

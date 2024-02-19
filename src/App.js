import './App.css';
import * as React from 'react'
import { Reset } from 'styled-reset'
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import Login from './pages/login/Login';
import Joincomplate from './pages/login/Joincomplate';
import Findid from './pages/findid/Findid';
import Findpw from './pages/findid/Findpw';
import FindpwStep2 from './pages/findid/FindpwStep2';
import Form from './guide/Form'
import List from './pages/signlanguagecreation/List';
import ListDetail from './pages/signlanguagecreation/ListDetail';
import SignLanguageEdit from './pages/signlanguagecreation/SignLanguageEdit';
import Publist from './publist/Publist'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/scss/main.scss'

function App() {
  if (window.location.pathname === '/guide') 
  return <BrowserRouter>
  <Routes>
    <Route path='/guide' element={<Form />}/>
  </Routes>
  </BrowserRouter>; 
  if (window.location.pathname === '/publist') 
  return <BrowserRouter>
  <Routes>
    <Route path='/publist' element={<Publist />}/>
  </Routes>
  </BrowserRouter>; 
  return (
    <React.Fragment>
      <Reset />
      <BrowserRouter basename={"https://hidepick.github.io/lgsimon/"} >
        <Routes>
          <Route path='/guide' element={<Form />}/>
        </Routes>
        <>
        <Header/>
        <Routes>
          <Route path='/' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/signlanguagecreation/list' element={<List />}/>
        </Routes>
        <Routes>
          <Route path='/signlanguagecreation/detail' element={<ListDetail />}/>
        </Routes>
        <Routes>
          <Route path='/signlanguagecreation/signlanguageedit' element={<SignLanguageEdit />}/>
        </Routes>
        <Routes>
          <Route path='/findid' element={<Findid />}/>
        </Routes>
        <Routes>
          <Route path='/findpw' element={<Findpw />}/>
        </Routes>
        <Routes>
          <Route path='/findpw/step2' element={<FindpwStep2 />}/>
        </Routes>
        <Routes>
          <Route path='/login/complate' element={<Joincomplate />}/>
        </Routes>
        <Footer/>
        </>
      </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import NotFoundpage from "./Components/NotFoundpage";
import { Toaster } from 'react-hot-toast';
import Item from "./Components/Item";
import Laptops from "./Components/Laptops";
import RouterSwitches from "./Components/RouterSwitches";
import Printers from "./Components/Printers";
import Monitors from "./Components/Monitors";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Components/Footer";

const Loader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      height: 250px;
      width: 250px;
      object-fit: contain;
    }
`

function App() {
  const [searchValue,setSearchValue] = useState('')
  const [preLoader, setPreLoader] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      setPreLoader(false)
    },5000)

  },[])

  console.log(searchValue)
  return (
    <div className="App">
      {
        preLoader ? (<Loader>
          <img src="/spinner.gif" alt=''></img>
        </Loader>):
        (
          <Router>
          <Toaster/>  
          <Nav searchValue={searchValue} setSearchValue={setSearchValue}/>
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}/>} />
            <Route path="/laptop" element={<Laptops/>} />
            <Route path="/routerSwitches" element={<RouterSwitches/>} />
            <Route path="/printer" element={<Printers/>} />
            <Route path="/monitor" element={<Monitors/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path='*' element={<NotFoundpage/>} />
            <Route path='/:id' element={<Item/>} />
          </Routes>
          <Footer/>
        </Router>
        )
      }
    </div>
  );
}

export default App;

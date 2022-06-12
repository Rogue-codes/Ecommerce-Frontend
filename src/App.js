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
import { useState } from "react";

function App() {
  const [searchValue,setSearchValue] = useState('')
  console.log(searchValue)
  return (
    <div className="App">
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
      </Router>
    </div>
  );
}

export default App;

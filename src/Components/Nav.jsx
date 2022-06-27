import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {BsHandbagFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { useTransition, animated } from 'react-spring'

const NavContainer = styled.nav`
  @media (max-width:480px) {
    position: relative;
  }
    width: 100%;
    height: 15vh;
    background: #a44153;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    a{
        color: #fff;
        text-decoration: none;
    }
    .bars{
        display: none;
        @media (max-width:480px) {
            display: block;
            font-size: 2rem;
            padding-right: 5%;
            color: white;
        }
    }
    
    .firstAni{
        @media (max-width:480px) {
        display: block;
        }
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 90;
        background-color: #010214a6;
    }
    
    .animate{
    @media (max-width:480px) {
      display: block;
    }
    display: none;
    width: 80%;
    box-shadow: 2px 2px 4px #010214a6;
    min-height: 1000vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2250;
    background-color: #a44153;
    a{
        display: block;
        color: #fff;
        margin-top: 5%;
        padding: 5%;
        margin-bottom: 9%;
        border-bottom: 1px solid #fff;
        text-decoration: none;
        font-size: 1.2rem;
    }
  }
  .cq{
    position: absolute;
    margin-top: 0%;
  }
  .logReg{
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2%;
    }
`
const Search = styled.input`
  @media (max-width:480px) {
    position: absolute;
    top: 120%;
    width: 90%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 1rem;
  }
  width: 30%;
  height: 8vh;
  border: none;
  padding-left: 2%;
  border-radius: 5px;
  font-size: 1.2vw;
  font-family: 'Raleway', sans-serif;
    &:focus{
      outline: none
    }
    &::placeholder{
      @media (max-width:480px) {
        font-size: 1rem;
      }
      font-size: 1.2vw;
    }
`
function Nav({searchValue,setSearchValue}) {
  const cartQuantity = useSelector((state)=> state.cart.cartquantity)

  const [showMenu, setShowMenu]= useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showMenu,
        delay: 200,
        // config: config.molasses,
        // onRest: () => set(!show),
    })
  
    const menuTransitions = useTransition(showMenu, {
      from: { opacity: 0, transform: "translateX(-100%)"},
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(-100%)" },
      reverse: showMenu,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

  return (
    <NavContainer>
        <Link to='/'><h2>SA-Market</h2></Link>
        <Search value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='search...'/>
        <div className="logReg">
          <Link to='/account'>Account</Link>
          <Link to='/cart'><BsHandbagFill size='2rem'/><span className='cq'><b>{cartQuantity}</b></span></Link>
        </div>

        <span className='bars' onClick={()=>setShowMenu(!showMenu)}><GiHamburgerMenu/></span>

        {
            maskTransitions(
            (styles, item) => item && <animated.div style={styles} className='firstAni' onClick={()=> setShowMenu(false)}>

            </animated.div>
            )
        }

        {
            menuTransitions(
            (styles, item) => item && <animated.div style={styles} className='animate'>
                <Link to='/' onClick={()=> setShowMenu(false)}>HOME</Link>
                <Link to='/laptop' onClick={()=> setShowMenu(false)}>Laptops</Link>
                <Link to='/routerSwitches' onClick={()=> setShowMenu(false)}>Switches & Routers</Link>
                <Link to='/printer' onClick={()=> setShowMenu(false)}>Printers</Link>
                <Link to='/monitor' onClick={()=> setShowMenu(false)}>Monitors</Link>
            </animated.div>
            )
      }
    </NavContainer>
  )
}

export default Nav
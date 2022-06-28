import React, { useState } from 'react'
import styled from 'styled-components'
import {BsFillEyeFill} from 'react-icons/bs'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
`
const Left = styled.div`
    width: 50%;
    height: 80vh;
    border-right: 1px solid #a44153;
    position : relative;
    h1{
        display: flex;
        justify-content: center;
        margin-top: 10%;
        font-size: 2vw;
        color: #a44153;
    }
    input[type="text"]{
        display: block;
        width: 80%;
        height: 8vh;
        margin: auto;
        margin-top: 5%;
        padding-left: 2%;
        border: none;
        border-bottom: 1px solid #a44153;
        &::placeholder{
            color: #a44153;
        }
        &:focus{
            outline: none;
        }
    }
    input[type="password"]{
        display: block;
        width: 80%;
        height: 8vh;
        margin: auto;
        margin-top: 5%;
        padding-left: 2%;
        border: none;
        border-bottom: 1px solid #a44153;
        &::placeholder{
            color: #a44153;
        }
        &:focus{
            outline: none;
        }
    }
    input[type="checkbox"]{
        margin-left: 10%;
        width: 3%;
        height: 3%;
        margin-top: 5%;
        color:#a44153;
    }
    input[type="checkbox"]:checked{
        background-color: green;
    }
    button{
        width: 80%;
        height: 8vh;
        margin-left: 10%;
        margin-top: 5%;
        border: none;
        background: #a44153;
        color: #fff;
        font-size: 1.5vw;
    }
    span{
        color: #a44153;
        margin-left: 5%;
    }
    .view{
        position: absolute;
        left: 85%;
        top:38vh;
        color: #a44153;
        cursor: pointer;
    }
`
const Right = styled.div`
    width: 50%;
    height: 80vh;
    h1{
        display: flex;
        justify-content: center;
        margin-top: 10%;
        font-size: 2vw;
        color: #a44153;
    }
    p{
        width: 90%;
        text-align: center;
        margin: auto;
        font-size: 1.5vw;
        margin-top: 10%;
        color: #a44153;
    }
    button{
        width: 80%;
        height: 8vh;
        margin-left: 10%;
        margin-top: 15%;
        border: none;
        background: #a44153;
        color: #fff;
        font-size: 1.5vw;
    }
`

function RegLog() {
    const [password,setPassword] = useState(true)

    const togglePassword = () => {
        setPassword(!password)
    }

    let type


    if(password){
        type='password'
    }else{
        type='text'
    }
  return (
    <Container>
        <Left>
            <h1>Login</h1>

            <input type="text" placeholder="E-mail" />
            <input type={type} placeholder="Password" /><BsFillEyeFill onMouseDown={togglePassword} className='view'/>
            <input type="checkbox" /> <span>Keep me logged in</span>
            <button>LOGIN</button>
        </Left>

        <Right>
                <h1>Create your SA-Market account</h1>
                <p>Create your SA-Market customer account in just a few clicks! You can register either using your e-mail address or through your Facebook account.</p>
                <button>
                    CREATE AN ACCOUNT VIA E-MAIL   
                </button>
        </Right>
    </Container>
  )
}

export default RegLog
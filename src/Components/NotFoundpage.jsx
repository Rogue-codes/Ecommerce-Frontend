import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundComponent = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5%;
  border: 1px solid #000;
  a{
    padding: 1% 4%;
    background: #a44153;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
  }
`
function NotFoundpage() {
  return (
    <NotFoundComponent>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to ='/'>Back To Home</Link>
    </NotFoundComponent>
  )
}

export default NotFoundpage
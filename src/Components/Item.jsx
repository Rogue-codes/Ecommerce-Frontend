import React from 'react'
// import { useParams } from 'react-router-dom'
import { useGetElementByIdQuery } from './Features/productApi';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 11px solid #000;
`
const Card = styled.div`
  width: 100%;
  height: 100vh;
  border: 11px solid #000;
`
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
function Item() {
  // const {id} = useParams()
  const {data, error, isLoading} = useGetElementByIdQuery()
  return (
    <div>
      <Container>
          {
           isLoading ? (<Loader>
            <img src="/spinner.gif" alt=''></img>
          </Loader>): 
            error ? (<p>An error Occured...</p>):
            (<div>
             {
              data.map((products) => 
                <Card key={products.id}>
                  <p>name: {products.name}</p>
                </Card>
              )
             }
            </div>)
          }
      </Container>
    </div>
  )
}

export default Item
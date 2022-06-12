import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { addTocart, getTotal } from './Features/cartSlice';
import { useGetAllMonitorsQuery } from './Features/productApi';
const FirstSection = styled.section`
    @media (max-width:480px) {
        margin-top: 15%;
    }
    width: 100%;
    padding: 2%;
    height: 70vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        @media (max-width:480px) {
            display: none;
        }
        width: 20%;
        height: 80%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        a{
            padding: 5%;
            display: block;
            text-decoration: none;
            color: #000;
            transition: all 0.5s linear;
            &:hover{
                color: #a44153;
            }
        }
    }
    .center{
        @media (max-width:480px) {
            width: 100%;
        }
        width: 55%;
        height: 80%;
        background: #a44153;
        border-radius: 10px;
        background: url('https://res.cloudinary.com/osuji/image/upload/v1654728272/electronics.gif_H16w1Amu9_mk0o4f.webp');
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-size: cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
    }
    .right{
        @media (max-width:480px) {
            display: none;
        }
        width: 22%;
        height: 95%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2%;
        .right1{
            width: 100%;
            height: 45%;
            background: url('https://res.cloudinary.com/osuji/image/upload/v1654728195/right_nabams.webp');
            background-size: cover;
            -webkit-background-size:cover;
            -moz-background-size:cover;
            -o-background-size:cover;
        }
        .right2{
            width: 100%;
            height: 45%;
            background: url('https://res.cloudinary.com/osuji/image/upload/v1654727966/sath_t27w41.jpg');
            background-size: cover;
            -webkit-background-size:cover;
            -moz-background-size:cover;
            -o-background-size:cover;
        }

    }
`

const LaptopContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f2f2f2;
`
const Card = styled.div`
    @media (max-width:480px) {
        width: 80%;
        margin: auto;
        margin-top: 10%;
    }
    width: 24%;
    height: 70vh;
    background: #fff;
    position: relative;
    margin-bottom: 5%;
    cursor: pointer;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
    img{
        width: 100%;
        height: 50%;
        object-fit: contain;
        position: absolute;
        top: 0;
        left: 0;
    }
    h2{
        @media (max-width:480px) {
            font-size: 1rem;
            top: 50%;
        }
        position: absolute;
        top: 60%;
        z-index: 5;
        padding: 5%;
        font-size: 1.2vw;
        font-family: 'Rubik', sans-serif;
    }
    p{
        @media (max-width:480px) {
            font-size: .8rem;
            top: 60%;
            font-weight: 300;
        }
        position: absolute;
        top: 65%;
        z-index: 5;
        padding: 5%;
        font-size: 1vw;
        font-family: 'Rubik', sans-serif;
        margin-bottom: 5%;
    }
    .price{
        @media (max-width:480px) {
            font-size: .8rem;
            top: 70%;
            font-weight: 300;
        }
        position: absolute;
        top: 70%;
        z-index: 5;
        padding: 5%;
        font-size: 1.2vw;
        font-family: 'Rubik', sans-serif;
    }
    .view{
        position: absolute;
        top: 70%;
        left: 75%;
        color: #fff;
        border-radius: 5px;
        background: #a44153;
        z-index: 5;
        padding: 2% 5%;
        font-size: 1.2vw;
        font-family: 'Rubik', sans-serif;
    }
    button{
        @media (max-width:480px) {
            font-size: .8rem;
        }
        position: absolute;
        top: 85%;
        width: 80%;
        margin-left: 10%;
        height: 8vh;
        background:#a44153;
        color: #fff;
        border: none;
        font-size: 1vw;
        font-family: 'Rubik', sans-serif;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            background:#a44153d0;
        }
    }
`
const Header = styled.header`
    width: 100%;
    height: 8vh;
    background: #a44153;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2%;
    h2{
        @media (max-width:480px) {
            font-size: 1rem;
        }
        font-size: 1.2vw;
        font-family: 'Rubik', sans-serif;
        color: #fff;
    }
`
const CardSection = styled.div`
    @media (max-width:480px) {
        flex-direction: column;
    }
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    flex-wrap: wrap;
`

function Monitors() {
    const {data, error, isLoading} = useGetAllMonitorsQuery();
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart)

    useEffect(()=>{
        dispatch(getTotal())
    },[cart,dispatch])

    const handleAddToCart = (item) => {
        dispatch(addTocart(item))
    }
    return (
        <>
        <FirstSection>
            <div className="left">
                <br /><br />
                <Link to='/laptop'>Laptops</Link>
                <Link to='/laptop'>Switches & Routers</Link>
                <Link to='/printer'>Printers</Link>
                <Link to='/monitor'>Monitors</Link>
            </div>
            <div className="center">
            </div>
            <div className="right">
                <div className="right1">
    
                </div>
    
                <div className="right2">
    
                </div>
            </div>
        </FirstSection>
        <LaptopContainer>
            { 
                isLoading ? (<p>Loading...</p>) : 
                error ? (<p>Error Occured...</p>) :
                (
                    <>
                        <Header><h2>Routers/ Switches in stock</h2></Header>
                        <CardSection>
                            { 
                                data.map((item) => <Card key={item.id}>
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    <p className='price'>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                    <img src={item.image} alt={item.name} />
                                    <button onClick={()=>handleAddToCart(item)}>Add to Cart</button>
                                </Card>)
                            }
                        </CardSection>
                    </>
                )
            }
            
        </LaptopContainer>
        </>
      )
}

export default Monitors
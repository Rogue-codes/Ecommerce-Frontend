import React from 'react'
import styled from 'styled-components'
import Timer from './Timer'
import {TbTruckDelivery} from 'react-icons/tb'
import {TbTruckReturn} from 'react-icons/tb'
import {AiTwotoneInsurance} from 'react-icons/ai'
import {TbShoppingCartDiscount} from 'react-icons/tb'
import {useGetAllProductsQuery} from './Features/productApi'
import { useDispatch } from 'react-redux'
import { addTocart } from './Features/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import {BsFillEyeFill} from 'react-icons/bs'

const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`
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
const Umlimited = styled.section`
    width: 100%;
    height: 10vh;
    background: #a44153;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    align-items: center;
    color: #fff;
    p{
        @media (max-width:480px) {
            font-size: 1rem;
        }
        font-size: 1.2vw;
        font-family: 'Rubik', sans-serif;
        color: #fff;
        font-weight: 500;
    }
`
const Offering = styled.section`
    @media (max-width:480px) {
        flex-direction: column;
        height: auto;
    }
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    color: #a44153;
    align-items: center;
    .offering{
        @media (max-width:480px) {
            width: 100%;
            margin-bottom: 5%;
        }
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        padding: 2%;
        align-items: center;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`
const Products = styled.div`
    background: #f2f2f2;
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
const Card = styled.div`
    @media (max-width:480px) {
        width: 80%;
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

function Home({searchValue}) {
    const {data, error, isLoading} = useGetAllProductsQuery();

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const handleAddToCart = (product) => {
        dispatch(addTocart(product))
        navigate('/cart')
    }

  return (
    <HomeContainer>
        <FirstSection>
            <div className="left">
                <br /><br />
                <Link to='/laptop'>Laptops</Link>
                <Link to='/routerSwitches'>Switches & Routers</Link>
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

        <Umlimited>
            <p>Hot deals/Free delivery:</p>
            <Timer/>
        </Umlimited>

        <Offering>
            <div className="offering">
                <TbTruckDelivery size="2rem" color="#a44153"/><p>Free Delivery</p>
            </div>
            <div className="offering">
                <TbTruckReturn size="2rem" color="#a44153"/><p>30 days return policy</p>
            </div>
            <div className="offering">
                <AiTwotoneInsurance size="2rem" color="#a44153"/><p>Insurance cover</p>
            </div>
            <div className="offering">
                <TbShoppingCartDiscount size="2rem" color="#a44153"/> <p>Amazing Discounts</p>
            </div>
        </Offering>

        <Products>
            {
                isLoading ? (<Loader>
                    <img src="/spinner.gif" alt=''></img>
                  </Loader>): 
                error ? (<p>An error Occured...</p>):
               ( <>
                    <Header><h2>currently in stock</h2></Header>
                    <CardSection>
                        {
                            data.filter( (val) => {
                                if(searchValue === ''){
                                    return val
                                }else if(val.name.toLowerCase().includes(searchValue.toLowerCase())){
                                    return val
                                } return null
                            }).map((product) => <Card key={product.id}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p className='price'>₦ {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                <img src={product.image} alt={product.name} />
                                <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                                <Link to={`/:${product.id}`} className='view'><BsFillEyeFill/></Link>
                            </Card>)
                        }
                    </CardSection>
                </>)

            }
        </Products>
        
    </HomeContainer>
  )
}

export default Home
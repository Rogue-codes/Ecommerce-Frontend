import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { deleteCartItem, addFromCart, reduceFromcart, clearCart, getTotal } from './Features/cartSlice'

const EmptyCart = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  gap: 5%;
  padding-top: 2%;
  align-items: center;
  flex-direction: column;
  p{
    font-size: 1.2vw;
    font-family: 'Rubik', sans-serif;
  }
  a{
    padding: 1% 3%;
    background: #a44153;
    text-decoration: none;
    color: #fff;
    font-size: 1vw;
    border-radius: 5px;
    font-family: 'Rubik', sans-serif;
    &:hover {
      background:#a44153d9;
    }
  }
`
const CartContainer = styled.div`
  @media (max-width:480px) {
    margin-top: 25%;
  }
  width: 100%;
  min-height: 100vh;
  .header{
    @media (max-width:480px) {
      font-size: 1rem;
    }
    margin-top: 2%;
    font-weight: 800;
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2vw;
    font-family: 'Rubik', sans-serif;
  }
  .headers{
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    column-gap: 0.5rem;
    border-bottom: 1px solid rgba(187,187,187);
    margin-top: 5%;
    margin-bottom: 0.5%;
  }
  .product{
    padding-left: 5%;
  }
  .total{
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
    @media (max-width:480px) {
      display: none;
    }
  }
  .quantity{
    margin-left: 80%;
  }
  .cartItem{
    width: 100%;
    height: 100%;
    border-bottom: 1px solid lightgrey;
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    column-gap: 0.5rem;
    .cartItemProduct{
      @media (max-width:480px) {
          flex-direction: column;
      }
      display: flex;
      gap: 5%;
      align-items: flex-start;
      padding-left: 5%;
      img{
        @media (max-width:480px) {
          width: 100px;
          height: 100px;
        }
        width: 150px;
        height: 150px;
      }
      .prodDetails{
        @media (max-width:480px) {
          flex-direction: row;
        }
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5%;
        padding: 2%;
        p{
          @media (max-width:480px) {
            font-size: .5rem;
          }
          font-size: 1.2vw;
          font-family: 'Rubik', sans-serif;
        }
        button{
          padding: 2% 5%;
          background: #a44153;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          &:hover{
            background: #a44153d7;
          }
        }
      }
    }
    .cartItemQuantity{
        @media (max-width:480px) {
          width: 150%;
          margin-left: 40%;
        }
        width: 80%;
        height: 30%;
        border: 1px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2% 5%;
        border-radius: 5px;
        .minus{
          cursor: pointer;
        }
        .plus{
          cursor: pointer;
        }
      }
  }
  .cartItemTotal{
    @media (max-width:480px) {
      display: none;
    }
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
  }
  .bottom{
    @media (max-width:480px) {
        flex-direction: column;
    }
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    .left{
      width: 40%;
      height: 80%;
      button{
        @media (max-width:480px) {
          font-size: 1rem;
          width: 80%;
        }
        width: 50%;
        margin-left: 2%;
        height: 8vh;
        font-size: 1.3vw;
        border: none;
        border-radius: 5px;
        background:#a44153;
        color: #fff;
        cursor: pointer;
      }
    }
    .right{
      @media (max-width:480px) {
        width: 100%;
        height: 60vh;
        padding-bottom: 5%;
      }
      width: 40%;
      height: 80%;
      background: #c0bfbf;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5%;
      .subTotal{
        display: flex;
        justify-content: flex-start;
        gap: 5%;
        padding: 2%;
        width: 100%;
      }
      .taxes{
        padding-left: 2%;
      }
      button{
        @media (max-width:480px) {
          font-size: .8rem;
          height: 12vh;
        }
        width: 80%;
        margin-left: 2%;
        height: 8vh;
        font-size: 1.3vw;
        border: none;
        border-radius: 5px;
        background:#a44153;
        color: #fff;
      }
      a{
          padding-left: 2%;
          color:#a44153;
      }
    }
  }
`
function Cart() {
  const cart = useSelector((state)=>state.cart)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[cart,dispatch])

  const handleDelete = (cartItem) =>{
    dispatch(deleteCartItem(cartItem))
  }

  const increaseCartItem = (cartItem) => {
    dispatch(addFromCart(cartItem))
  }

  const reduceCartItem = (cartItem) => {
    dispatch(reduceFromcart(cartItem))
  }

  const clearCartItems = () => {
    dispatch(clearCart())
  }

  return (
    <CartContainer>
      <div className="header"><h3>Shopping cart</h3></div>
        {
          cart.cartItems.length === 0 ? (
            <EmptyCart>
              <p>Your cart is currently empty</p>
              <Link to='/'>Start Shopping</Link>
            </EmptyCart>
          ) : (
            <>
                  <div className="headers">
                    <div className="product">PRODUCTS</div>
                    <div className="price">PRICE</div>
                    <div className="quantity">QUANTITY</div>
                    <div className="total">TOTAL</div>
                  </div>
              {
                
                cart.cartItems.map(cartItem => 
                  <>
                    <div className="cartItem">
                      <div className="cartItemProduct">
                        <img src={cartItem.image} alt={cartItem.name} />
                        <div className="prodDetails">
                          <p>{cartItem.name}</p><br />
                          <p>{cartItem.description}</p><br />
                          <button onClick={()=>handleDelete(cartItem)}>remove</button>
                        </div>
                      </div>

                      <div className="cartItemPrice">
                        <p>₦{cartItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                      </div> 

                      <div className="cartItemQuantity">
                          <div className="minus" onClick={()=>reduceCartItem(cartItem)}>-</div>
                          <p>{cartItem.itemQuantityInCart}</p>
                          <div className="plus" onClick={()=>increaseCartItem(cartItem)}>+</div>
                      </div>

                      <div className="cartItemTotal">
                      ₦{(cartItem.price * cartItem.itemQuantityInCart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </div>
                  </>
                  )
              }
            
                     
            <div className="bottom">
                    <div className="left">
                      <button onClick={()=>clearCartItems()}>Clear Cart</button>
                    </div>

                    <div className="right">
                      <div className="subTotal">
                        <div className="subTotalLeft">Subtotal:</div>
                        <div className="subTotalRight"><b>₦ {(cart.cartTotalAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b></div>
                      </div>
                      <div className="taxes">
                        <p>Taxes and shipping are calculated at checkout</p>
                      </div>
                      <button>Check Out</button>
                      <Link to='/'>Continue Shopping</Link>
                    </div>
            </div>
            </> 
          )
        }
    </CartContainer>
  )
}

export default Cart
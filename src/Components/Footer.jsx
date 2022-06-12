import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    @media (max-width:480px) {
        flex-wrap: wrap;
        height: auto;
    }
    width: 100%;
    height: 55vh;
    background: #a44153;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    ul{
        @media (max-width:480px) {
            width: 50%;
            margin-bottom: 5%;
        }
        list-style-type: none;
        li{
            color: #dbd3d3;
            cursor: pointer;
            padding-top: 5%;
            &:hover{
                color: #fff;
            }
            &:nth-child(1){
                font-size: 1rem;
                font-weight: 900;
                margin-bottom: 5%;
                color: #fff;
            }
        }
    }
`
function Footer() {
  return (
    <Foot>
        <ul>
            <li>LET US HELP YOU</li>
            <li>Help Center</li>
            <li>How to shop on SA-Market</li>
            <li>Delivery options and timelines</li>
            <li>How to return a product on SA-Market</li>
            <li>Corporate purchases</li>
            <li>Report a Product</li>
            <li>Ship your package anywhere in Nigeria</li>
        </ul>

        <ul>
            <li>ABOUT SA-MARKET</li>
            <li>About Us</li>
            <li>SA-Market Careers</li>
            <li>SA-market express</li>
            <li>Terms  & Conditions</li>
            <li>Privacy & Cookies Notice</li>
            <li>SA-Market Prime</li>
            <li>Sa-Market Global</li>
        </ul>

        <ul>
            <li>MAKE MONEY WITH SA-MARKET</li>
            <li>Sell on SA-Market</li>
            <li>Become a sales consultant</li>
            <li>Become SA-Market vendor service provider</li>
            <li>become a logistics service partner</li>
            <li>Join the SA Academy</li>
        </ul>

        <ul>
            <li>International Offices</li>
            <li>SA-Market Ghana</li>
            <li>SA-Market Kenya</li>
            <li>SA-Market Ethopia</li>
            <li>SA-Market South-Africa</li>
            <li>SA-Market Morroco</li>
        </ul>
    </Foot>
  )
}

export default Footer
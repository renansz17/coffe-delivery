import React, { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from '../../assets/coffeeLogo.png'
import { CartContainer, Header, HeaderItens, LocationContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export function FixedHeader() {
  const { cartQuantity } = useContext(CartContext)
  return (
    <div>
      <Header>
        <NavLink to="/">
          <img src={coffeeLogo} alt="" />
        </NavLink>
        <HeaderItens>
          {/* Add flexible location */}
          <LocationContainer>
            <MapPin size={'22'} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocationContainer>
          <NavLink to="/checkout">
            <CartContainer>
              <span>{cartQuantity}</span>
              <ShoppingCart size={'22'} />
            </CartContainer>
          </NavLink>
        </HeaderItens>
      </Header>
    </div>
  )
}

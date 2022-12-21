import React from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from '../../assets/coffeeLogo.png'
import { CartContainer, Header, HeaderItens, LocationContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function FixedHeader() {
  return (
    <div>
      <Header>
        <NavLink to={'/'}>
          <img src={coffeeLogo} alt="" />
        </NavLink>
        <HeaderItens>
          {/* Add flexible location */}
          <LocationContainer>
            <MapPin size={'22'} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocationContainer>
          <CartContainer>
            <ShoppingCart size={'22'} />
          </CartContainer>
        </HeaderItens>
      </Header>
    </div>
  )
}

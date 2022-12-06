import React from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeLogo from '../../assets/coffeLogo.png'
import { CartContainer, Header, HeaderItens, LocationContainer } from './styles'

export function FixedHeader() {
  return (
    <div>
      <Header>
        <img src={coffeLogo} alt="" />
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

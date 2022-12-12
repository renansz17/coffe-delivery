import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../assets/coffeIntroImage.png'
import {
  CartItem,
  CoffeeItem,
  InfoItens,
  MainContainer,
  PackageItem,
  TimerItem,
} from './styles'

export function Home() {
  return (
    <MainContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <InfoItens>
          <CartItem>
            <div className="item">
              <ShoppingCart size={'16'} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </CartItem>
          <PackageItem>
            <div className="item">
              <Package size={'16'} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </PackageItem>
          <TimerItem>
            <div className="item">
              <Timer size={'16'} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </TimerItem>
          <CoffeeItem>
            <div className="item">
              <Coffee size={'16'} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </CoffeeItem>
        </InfoItens>
      </div>
      <div>
        <img src={introImage} alt="" />
      </div>
    </MainContainer>
  )
}

import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../assets/coffeeIntroImage.png'
import {
  CartItem,
  CoffeeeItem,
  CoffeeList,
  CoffeeListContainer,
  InfoItens,
  IntroContainer,
  MainContainer,
  PackageItem,
  TimerItem,
} from './styles'
import { coffeees } from '../../data/coffees'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <MainContainer>
      <IntroContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffeee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
            <CoffeeeItem>
              <div className="item">
                <Coffee size={'16'} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </CoffeeeItem>
          </InfoItens>
        </div>
        <div>
          <img src={introImage} alt="" />
        </div>
      </IntroContainer>
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <div>
          <CoffeeList>
            {coffeees.map((coffee) => (
              <CoffeeCard coffee={coffee} key={coffee.id} />
            ))}
          </CoffeeList>
        </div>
      </CoffeeListContainer>
    </MainContainer>
  )
}

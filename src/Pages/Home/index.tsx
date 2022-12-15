import React from 'react'
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import introImage from '../../assets/coffeIntroImage.png'
import {
  BuyContainer,
  CartItem,
  CoffeAddToCartButton,
  CoffeAmount,
  CoffeCard,
  CoffeDescription,
  CoffeeItem,
  CoffeImage,
  CoffeList,
  CoffeName,
  CoffePrice,
  CoffePriceContainer,
  CoffeType,
  CoffeTypeContainer,
  CounterButton,
  InfoItens,
  IntroContainer,
  MainContainer,
  PackageItem,
  TimerItem,
} from './styles'
import coffe from '../../assets/americano.png'

export function Home() {
  return (
    <MainContainer>
      <IntroContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
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
      </IntroContainer>
      <CoffeList>
        <h2>Nossos cafés</h2>
        <div>
          <CoffeCard>
            <CoffeImage src={coffe} alt="" />
            <CoffeTypeContainer>
              <CoffeType>
                <span>TRADICIONAL</span>
              </CoffeType>
            </CoffeTypeContainer>
            <CoffeName>expresso tradicional</CoffeName>
            <CoffeDescription>
              o tradicional café feito com água quente e grãos moidos
            </CoffeDescription>
            <CoffePriceContainer>
              <CoffePrice>
                <span className="currencyType">R$</span>
                <span className="price">9,90</span>
              </CoffePrice>
              <BuyContainer>
                <CoffeAmount>
                  <CounterButton>
                    <Minus size={'14'} color={'#8047F8'} />
                    <span>1</span>
                    <Plus size={'14'} color={'#8047F8'} />
                  </CounterButton>
                </CoffeAmount>
                <CoffeAddToCartButton>
                  <ShoppingCart size={'22'} color={'white'} />
                </CoffeAddToCartButton>
              </BuyContainer>
            </CoffePriceContainer>
          </CoffeCard>
        </div>
      </CoffeList>
    </MainContainer>
  )
}

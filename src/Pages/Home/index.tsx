import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../assets/coffeIntroImage.png'
import { MainContainer } from './styles'

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
        <div>
          <div>
            <ShoppingCart size={'16'} weight="fill" />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <Timer size={'16'} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <Package size={'16'} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <Coffee size={'16'} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </div>
      <div>
        <img src={introImage} alt="" />
      </div>
    </MainContainer>
  )
}

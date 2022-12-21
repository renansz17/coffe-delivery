import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Coffe } from '../../interfaces/Coffe'
import {
  BuyContainer,
  CoffeAddToCartButton,
  CoffeAmount,
  CoffeCardContainer,
  CoffeDescription,
  CoffeImage,
  CoffeName,
  CoffePrice,
  CoffePriceContainer,
  CoffeType,
  CoffeTypeContainer,
  CounterButton,
} from './styles'
interface CoffeCardInterface {
  coffee: Coffe
}

export function CoffeCard({ coffee }: CoffeCardInterface) {
  const [amount, setAmount] = useState<number>(1)

  function handleOnIncreaseAmount() {
    setAmount((state) => state + 1)
  }

  function handleOnDecreaseAmount() {
    setAmount((state) => state - 1)
  }

  return (
    <CoffeCardContainer>
      <CoffeImage src={`${coffee.photo}`} alt="" />
      <CoffeTypeContainer>
        <CoffeType>
          {coffee.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </CoffeType>
      </CoffeTypeContainer>
      <CoffeName>{coffee.name}</CoffeName>
      <CoffeDescription>{coffee.description}</CoffeDescription>
      <CoffePriceContainer>
        <CoffePrice>
          <span className="currencyType">R$</span>
          <span className="price">{coffee.price}</span>
        </CoffePrice>
        <BuyContainer>
          <CoffeAmount>
            <CounterButton>
              <Minus
                size={'14'}
                color={'#8047F8'}
                onClick={() => handleOnDecreaseAmount()}
              />
              <span>{amount}</span>
              <Plus
                size={'14'}
                color={'#8047F8'}
                onClick={() => handleOnIncreaseAmount()}
              />
            </CounterButton>
          </CoffeAmount>
          <CoffeAddToCartButton>
            <ShoppingCart size={'22'} color={'white'} />
          </CoffeAddToCartButton>
        </BuyContainer>
      </CoffePriceContainer>
    </CoffeCardContainer>
  )
}

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../../interfaces/Coffee'
import {
  BuyContainer,
  CoffeeAddToCartButton,
  CoffeeAmount,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeImage,
  CoffeeName,
  CoffeePrice,
  CoffeePriceContainer,
  CoffeeType,
  CoffeeTypeContainer,
  CounterButton,
} from './styles'
interface CoffeeCardInterface {
  coffeee: Coffee
}

export function CoffeeCard({ coffeee }: CoffeeCardInterface) {
  const [amount, setAmount] = useState<number>(1)
  const [coffee, setCoffee] = useState<Coffee>()
  function handleOnIncreaseAmount() {
    setAmount((state) => state + 1)
  }

  function handleOnDecreaseAmount() {
    setAmount((state) => state - 1)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={`src/assets/${coffeee.photo}`} alt="" />
      <CoffeeTypeContainer>
        <CoffeeType>
          {coffeee.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </CoffeeType>
      </CoffeeTypeContainer>
      <CoffeeName>{coffeee.name}</CoffeeName>
      <CoffeeDescription>{coffeee.description}</CoffeeDescription>
      <CoffeePriceContainer>
        <CoffeePrice>
          <span className="currencyType">R$</span>
          <span className="price">{coffeee.price}</span>
        </CoffeePrice>
        <BuyContainer>
          <CoffeeAmount>
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
          </CoffeeAmount>
          <CoffeeAddToCartButton>
            <ShoppingCart size={'22'} color={'white'} />
          </CoffeeAddToCartButton>
        </BuyContainer>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  )
}

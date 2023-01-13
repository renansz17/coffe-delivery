import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Coffee } from '../../interfaces/Coffee'
import { IncrementButton } from '../IncrementButton'
import {
  BuyContainer,
  CoffeeAddToCartButton,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeImage,
  CoffeeName,
  CoffeePrice,
  CoffeePriceContainer,
  CoffeeType,
  CoffeeTypeContainer,
} from './styles'
interface CoffeeCardInterface {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardInterface) {
  const [amount, setAmount] = useState<number>(0)
  const { addCoffeeToCart } = useContext(CartContext)
  function handleOnIncreaseAmount() {
    setAmount((state) => state + 1)
  }

  function handleOnDecreaseAmount() {
    setAmount((state) => state - 1)
  }
  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      amount,
    }

    addCoffeeToCart(coffeeToAdd)
  }
  return (
    <CoffeeCardContainer>
      <CoffeeImage src={`src/assets/${coffee.photo}`} alt="" />
      <CoffeeTypeContainer>
        <CoffeeType>
          {coffee.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </CoffeeType>
      </CoffeeTypeContainer>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <CoffeePriceContainer>
        <CoffeePrice>
          <span className="currencyType">R$</span>
          <span className="price">{coffee.price}</span>
        </CoffeePrice>
        <BuyContainer>
          {/* <CoffeeAmount>
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
          </CoffeeAmount> */}
          <IncrementButton
            amount={amount}
            increaseAmount={handleOnIncreaseAmount}
            decreaseAmount={handleOnDecreaseAmount}
          />
          <CoffeeAddToCartButton>
            <ShoppingCart
              size={'22'}
              color={'white'}
              onClick={handleAddToCart}
            />
          </CoffeeAddToCartButton>
        </BuyContainer>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  )
}

import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  width: 256px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const CoffeeImage = styled.img`
  align-self: center;
  width: 120px;
  position: relative;
  top: -20px;
`
export const CoffeeName = styled.h3`
  margin-bottom: 8px;
`

export const CoffeeTypeContainer = styled.div`
  display: flex;
`

export const CoffeeType = styled.div`
  span {
    background: ${(props) => props.theme.colors['brand-yellow-light']};
    border-radius: 100px;
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 10px;
    padding: 4px 8px;
  }
  margin-bottom: 16px;
`
export const CoffeeDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.theme.colors['base-label']};
  padding: 0 20px;
  margin-bottom: 33px;
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`
export const BuyContainer = styled.div`
  display: flex;
`
export const CoffeePrice = styled.span`
  .currencyType {
    font-size: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors['base-label']};
  }
  .price {
    font-weight: 800;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    margin-left: 2px;
  }
`
export const CoffeeAmount = styled.div`
  display: flex;
  margin-right: 8px;
`
export const CoffeeAddToCartButton = styled.button`
  background: ${(props) => props.theme.colors['brand-purple-dark']};
  border-radius: 6px;
  border: none;
  width: 38px;
  height: 38px;
`

export const CounterButton = styled.div`
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 38px;
`

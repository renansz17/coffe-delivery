import styled from 'styled-components'
export const MainContainer = styled.main`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 48px;
  }
  h2 {
    font-weight: 400;
    font-size: 20px;
  }
`
export const IntroContainer = styled.div`
  display: flex;
`
export const InfoItens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.375rem;
`
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
export const TimerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors['brand-yellow']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
export const PackageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors['base-text']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors['brand-purple']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
export const CoffeList = styled.div`
  h2 {
    font-weight: 800;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 55px;
  }
`
export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  width: 256px;
  justify-content: center;
  align-items: center;
`
export const CoffeImage = styled.img`
  align-self: center;
  width: 120px;
  position: relative;
  top: -20px;
`
export const CoffeName = styled.h3`
  margin-bottom: 8px;
`

export const CoffeTypeContainer = styled.div`
  display: flex;
`

export const CoffeType = styled.div`
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
export const CoffeDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.theme.colors['base-label']};
  padding: 0 20px;
  margin-bottom: 33px;
`

export const CoffePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`
export const BuyContainer = styled.div`
  display: flex;
`
export const CoffePrice = styled.span`
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
export const CoffeAmount = styled.div`
  display: flex;
  margin-right: 8px;
`
export const CoffeAddToCartButton = styled.button`
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

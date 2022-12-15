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
  }
`
export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  width: 256px;
`
export const CoffeImage = styled.img`
  align-self: center;
  width: 120px;
  position: relative;
  top: -20px;
`
export const CoffeName = styled.h3``
export const CoffeType = styled.span``
export const CoffeDescription = styled.p``
export const CoffePrice = styled.span``
export const CoffeAmount = styled.div``
export const CoffeAddToCartButton = styled.button``

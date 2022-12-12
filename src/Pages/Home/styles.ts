import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
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
export const InfoItens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.375rem;
`
export const CartItem = styled.div`
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
    background: ${(props) => props.theme.colors['base-text']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
export const CoffeeItem = styled.div`
  display: flex;
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

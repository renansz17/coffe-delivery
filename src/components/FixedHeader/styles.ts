import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
`
export const HeaderItens = styled.div`
  display: flex;
  align-items: center;
`
export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme.colors['brand-purple-light']};
  margin-right: 12px;
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
  span {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
    margin-left: 4px;
  }
`
export const CartContainer = styled.div`
  padding: 8px;
  background: ${(props) => props.theme.colors['brand-yellow-light']};
  border-radius: 6px;
  svg {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`

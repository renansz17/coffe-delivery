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
export const CartContainer = styled.button`
  padding: 8px;
  background: ${(props) => props.theme.colors['brand-yellow-light']};
  border-radius: 6px;
  border: none;
  svg {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: 25px;
    right: 153px;
    color: ${(props) => props.theme.colors['base-white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    background: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
  cursor: pointer;
`

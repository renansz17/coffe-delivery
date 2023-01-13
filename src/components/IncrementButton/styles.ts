import styled from 'styled-components'

export const CoffeeAmount = styled.div`
  display: flex;
  margin-right: 8px;
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

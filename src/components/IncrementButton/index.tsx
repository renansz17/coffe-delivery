import { Minus, Plus } from 'phosphor-react'
import { CoffeeAmount, CounterButton } from './styles'
interface IncrementButtonProps {
  amount: number
  increaseAmount: () => void
  decreaseAmount: () => void
}
export function IncrementButton({
  amount,
  increaseAmount,
  decreaseAmount,
}: IncrementButtonProps) {
  return (
    <CoffeeAmount>
      <CounterButton>
        <Minus size={'14'} color={'#8047F8'} onClick={decreaseAmount} />
        <span>{amount}</span>
        <Plus size={'14'} color={'#8047F8'} onClick={increaseAmount} />
      </CounterButton>
    </CoffeeAmount>
  )
}

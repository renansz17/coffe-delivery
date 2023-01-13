import { Trash } from 'phosphor-react'
import React, { useContext } from 'react'
import { IncrementButton } from '../../components/IncrementButton'
import { CartContext } from '../../contexts/CartContext'
export function CheckoutPage() {
  const { cartItems } = useContext(CartContext)

  return (
    <div>
      <div>
        <h2>Complete seu pedido</h2>
        <div>
          <img src="" alt="" />
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma de deseja pagar</p>
          <div>
            <div>Cartão de Crédito</div>
            <div>Cartão de Débito</div>
            <div>Dinheiro</div>
          </div>
        </div>
      </div>
      <div>
        <h2>Cafés Selecionados</h2>
        <img src="" alt="" />
        <div>
          <span>Expresso</span>
          <div>
            <IncrementButton
              amount={0}
              increaseAmount={function (): void {
                throw new Error('Function not implemented.')
              }}
              decreaseAmount={function (): void {
                throw new Error('Function not implemented.')
              }}
            />
            <button>
              <Trash />
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

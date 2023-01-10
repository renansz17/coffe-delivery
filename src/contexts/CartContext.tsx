import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../interfaces/Coffee'

interface CartContextType {
  cartItems: Coffee[]
  cartQuantity: number
  addCoffeeToCart: (coffee: Coffee) => void
}
export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<Coffee[]>([])

  function addCoffeeToCart(coffee: Coffee) {
    setCartItems([...cartItems, coffee])
  }
  const cartQuantity = cartItems.length
  return (
    <CartContext.Provider value={{ cartQuantity, cartItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

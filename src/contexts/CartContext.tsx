import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../interfaces/Coffee'

interface CartContextType {
  //   cartItems: CartItem[]
  //   cartQuantity: number
  //   cartItemsTotal: number
  //   increaseCartItemAmount: (cartItemId: number) => void
  //   decreaseCartItemAmount: (cartItemId: number) => void
}
export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

import { Route, Routes } from 'react-router-dom'
import { CheckoutPage } from './Pages/Checkout'
import { Home } from './Pages/Home'
import { OrderConfirmedPage } from './Pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}

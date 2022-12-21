import { Outlet } from 'react-router-dom'
import { FixedHeader } from '../components/FixedHeader'

export function DefaultLayout() {
  return (
    <>
      <FixedHeader />
      <Outlet />
    </>
  )
}

import { Link, usePage } from '@inertiajs/react'
import { useRoute } from 'ziggy'

const MainLayout = ({ children }) => {
  const { flash: { success } } = usePage().props
  const route = useRoute()

  return (
    <>
      {success && <div className='success'>{success}</div>}
      <Link href={route('listing.index')}>Listings</Link>&nbsp;
      <Link href={route('listing.create')}>New Listing</Link>
      {children}
    </>
  )
}

export default MainLayout

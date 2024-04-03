import ListingAddress from '@/Components/ListingAddress'
import { Link } from '@inertiajs/react'
import { useRoute } from 'ziggy'

const ListingIndex = ({ listings }) => {
  const route = useRoute()

  return (
    <>
      {listings.map(listing => (
        <div key={listing.id}>
          <div>
            <Link href={route('listing.show', listing.id)}>
              <ListingAddress listing={listing} />
            </Link>
          </div>
          <div>
            <Link href={route('listing.edit', listing.id)}>Edit</Link>
          </div>
          <div>
            <Link href={route('listing.destroy', listing.id)} method='DELETE' as='button'>Delete</Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListingIndex

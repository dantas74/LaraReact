const ListingAddress = ({ listing }) => {
  return (
    <span>
      {listing.street} {listing.street_nr}, {listing.city}, for ${listing.price}
    </span>
  )
}

export default ListingAddress

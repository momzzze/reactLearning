import ListingCard from "@/components/ListingCard"

const ListingList = ({ listings }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {listings.length > 0 ? (
        listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))) : (
        <div className="text-center">No listings found.</div>
      )}
    </div>
  )
}

export default ListingList
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"

import api from "@/api";
import ListingDetailsCard from "@/components/ListingDetailsCard";
import { Spinner } from "@/components/ui";

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const [listing, setListing] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortController = useRef(null);

  useEffect(() => {
    const fetchListing = async () => {
      setLoading(true);
      setError(null);

      abortController.current = new AbortController()

      try {
        const response = await api.get(`/api/listings/${listingId}`, { signal: abortController.current?.signal })
        setListing(response.data);
      } catch (error) {
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }

    }

    fetchListing();

    return () => {
      abortController.current?.abort();
    }

  }, [listingId])

  const renderListing = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center">
          <Spinner size='sm' />
        </div>
      )
    }

    if (error) {
      return <p className='text-red-500 text-center'>{error}</p>
    }

    return <ListingDetailsCard listing={listing} />

  }

  return <div className="container py-4">{renderListing()}</div>
}

export default ListingDetailsPage
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"

import api from "@/api";
import ListingDetailsCard from "@/components/ListingDetailsCard";
import { Spinner } from "@/components/ui";
import useFetch from "@/hooks/useFetch";

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data:listing,
    error,
    isLoading
  } =useFetch(`/api/listings/${listingId}`);



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
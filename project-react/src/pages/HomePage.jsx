import axios from "axios";
import { useEffect, useRef,useState } from "react";

import api from "@/api";
import ListingFilters from "@/components/ListingFilters";
import ListingList from "@/components/ListingList";
import { Separator, Spinner } from "@/components/ui";
import useFetch from "@/hooks/useFetch";

const HomePage = () => {  
  const [filters, setFilters] = useState({
    dates:undefined,
    guests:0,
    search:''
  });
  const {
    data:listings,
    error,
    isLoading
  }=useFetch('/api/listings',{params:filters});
  

  const handleFilters = (filters) => {
    setFilters(filters);
  }
  const renderListingList = () => {
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


    return <ListingList listings={listings} />
  }
  return (
    <div className="container py-4">
      <div className="container py-4">
        <ListingFilters onChange={handleFilters} />
        <Separator className="my-4" />
      </div>
      {renderListingList()}
    </div>
  )
}

export default HomePage
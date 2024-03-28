import { Search } from "lucide-react";
import { useState } from "react";

import { Button, DateRangePicker, Input, Stepper } from "@/components/ui";

const ListingFilters = ({ onChange }) => {
    const [dates, setDates] = useState();
    const [guests, setGuests] = useState(0);
    const [search, setSearch] = useState('');

    const handleSubmit = () => {
        onChange({ dates, guests, search })
    }
    return (
        <div className="flex flex-row items-center justify-center gap-2">
            <Input className="w-[400px]" placeholder="Search destinations" value={search} onChange={(e) => setSearch(e.target.value)} />
            <DateRangePicker placeholder="Add dates" value={dates} minDate={new Date()} onChange={setDates} />
            <Stepper label="guest" value={guests} onChange={setGuests} />
            <Button onClick={handleSubmit}>
                <Search className="w-4 h-4" />
            </Button>
        </div>
    )
}

export default ListingFilters
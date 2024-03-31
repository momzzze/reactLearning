import { Link } from "react-router-dom";

import { Separator } from "@/components/ui";

const NavBar = () => {
    return (
        <>
            <div className="flex flex-row justify-center gap-8 px-8 py-4">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
            <Separator className="mx-2" />
        </>
    )
}

export default NavBar
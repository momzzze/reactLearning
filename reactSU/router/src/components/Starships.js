import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';


export const Starships = () => {

    const [starship, setStarship] = useState({});
    const { productId, filmId } = useParams();
    const [film, setFilm] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const nextProductHandler = () => {
        navigate(`/starships/${Number(productId) + 1}`);
    }

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${productId}/`)
            .then(res => res.json())
            .then(result => {
                setStarship(result);
            })
    }, [productId, navigate]);

    useEffect(() => {
        if (starship.films?.length > 0 && filmId) {
            const fid = Number(filmId) - 1;
            const filmUrl = starship.films[fid]
            fetch(filmUrl)
                .then(res => res.json())
                .then(result => {
                    setFilm(result);
                })
        }
    }, [starship, filmId])
    return (
        <div>
            <h2>Products page</h2>
            <h3>Product {productId} Specification</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
            </ul>

            <h3>Movies</h3>
            <nav>
                <ul>
                    {starship.films?.map((x, i) =>
                        <Link key={x} to={`films/${i + 1}`}>Film {i + 1}</Link>
                    )}
                </ul>
            </nav>
            <section>
                <Routes>
                    <Route path={`/films/:filmId`} element={<h3>{film.title}</h3>} />
                </Routes>
            </section>
            <button onClick={nextProductHandler}>Next</button>
        </div>

    )
}
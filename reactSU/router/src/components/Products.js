import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


export const Products = () => {
    const [starship, setStarship] = useState({});
    const { productId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const nextProductHandler = () => {
        navigate(`/products/${Number(productId) + 1}`);
    }

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${productId}/`)
            .then(res => res.json())
            .then(result => {
                setStarship(result);
            })
    }, [productId]);

    return (
        <div>
            <h2>Products page</h2>
            <h3>Product {productId} Specification</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
            </ul>
            <button onClick={nextProductHandler}>Next</button>
        </div>

    )
}
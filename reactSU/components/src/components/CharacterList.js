import { useEffect, useState } from "react";

const url = `https://swapi.dev/api/people`;

export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => { setCharacters(result.results) })
    }, []);



    return (
        <ul>
            {!characters.length && <li>Loading . . .</li>}
            {characters.map(x => (
                <li key={x.name}>{x.name}</li>
            ))}
        </ul>
    )
}
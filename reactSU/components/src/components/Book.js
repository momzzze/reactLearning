import { useState, useEffect } from "react";
import styles from './Book.module.css';


export const Book = (props) => {
    const [highlited, setHighlited] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Mounting');
    }, []);

    useEffect(() => {
        console.log('Updating' + props.title);
    }, [highlited]);

    const clickHandler = () => {
        setHighlited(state => !state);
    };

    const deleteHandler = () => {
        setDeleted(true);
    }

    let style = {};

    if (highlited) {
        style.backgroundColor = 'blue';
    }
    if (deleted) {

    }


    return (
        <li style={style} className={styles['book-item']}>
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>Price: {props.price}</div>
                <footer >
                    <button className={styles['author']} onClick={clickHandler}>Highlight</button>
                    <button className={styles['author']} onClick={deleteHandler}>Delete</button>
                    <span>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    );
}
import { useEffect } from "react"
import { Book } from "./Book"
export const BookList = (props) => {
  

    return (
        <ul>
            {props.books.map((x,i) => <Book key={i} {...x} />)} {/* when its simple syntax*/}
        </ul>
    )
}

{/* <Book
title={props.books[0].title}
author={props.books[0].author}
year={props.books[0].year}
price={props.books[0].price}
/>
<Book
title={props.books[1].title}
author={props.books[1].author}
year={props.books[1].year}
price={props.books[1].price}
/>
<Book
title={props.books[2].title}
author={props.books[2].author}
year={props.books[2].year}
price={props.books[2].price}
/>
<Book
title={props.books[3].title}
author={props.books[3].author}
year={props.books[3].year}
price={props.books[3].price}
/> */}
import { useParams } from "react-router-dom";

type BookDetail = {BookID:string;BookName:string}

const Book =() => {

const {BookID,BookName} = useParams<BookDetail>();

    return(
        <div>
            <h1> This is new book on AI </h1>
            <h2> Book details are </h2>
            <p> Book ID: {BookID}   Book Name: {BookName}</p>            
        </div>

    );
}

export default Book;
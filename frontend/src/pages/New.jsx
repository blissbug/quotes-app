import { Fragment, useEffect, useRef } from "react";
import axios from "axios";
function NewQuotes(){
    const authorRef=useRef();
    const quoteRef=useRef();
    
    async function addNew(e){
        e.preventDefault();
        let author=authorRef.current.value;
        let quote=quoteRef.current.value;
        let resp = await axios.post("http://localhost:3000/add",{
            author,
            quote
        }); 
        console.log(resp);           
    }

    return(
        <>
        <Fragment>
            <div>Add New Quote</div>
            <form onSubmit={addNew}>
                <div>Author:<input type="text" name="author" id="" ref={authorRef} className="bg-amber-400"/></div>
                <div>Quote:<input type="text" name="quote" id="" ref={quoteRef}/></div>
                <button type="submit">Add</button>
            </form>
            
        </Fragment>
        </>
    )
}

export default NewQuotes;
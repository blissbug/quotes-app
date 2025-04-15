import { Fragment } from "react"
import { useNavigate } from "react-router-dom";

function Quote({id,author,quote}){
    let Navigate = useNavigate();

    function showQuoteHandler(id){
        Navigate(`/quote/${id}`);
    }
    
    return(
        <>
        <Fragment>
            <li>
                <p>{quote}</p>
                <h5>Author - {author} </h5>
            </li>
            <button onClick={showQuoteHandler(id)}>View full quote!</button>
        
        </Fragment>
        </>
    )
}

export default Quote;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Show(){
    const [quote,setQuote]=useState([]);
    const params=useParams();
    useEffect(()=>{
        async function getQuote(){
            let data=await axios.get(`http://localhost:3000/quote/${params.id}`);
            setQuote({author:data.data.author,quote:data.data.quote});
        }
        getQuote();
        
    },[]);
    return(
        <>
        <div>Author: {quote.author}</div>
        <div>Quote: {quote.quote}</div>
        </>
    )
}

export default Show;
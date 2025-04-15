import { useEffect, useState, Fragment } from "react";
import Quote from "../Components/Quote/Quote";

function AllQuotes(){
    let [allQuotes,setAllQuotes] = useState([]);
    useEffect(()=>{
        async function getData(){
            try{
                let resp = await fetch("http://localhost:3000/all");
                let json=await resp.json();
                console.log(json,"hehe");
                setAllQuotes(json);
            }
            catch{
                console.log("Error Occured");
            }
        }
        getData(); 
    },[]);
    return(
        <Fragment>
            {allQuotes.map((quote,index)=>{
            return(
                <Quote key={JSON.stringify(quote._id)} author={quote.author} quote={quote.quote} id={JSON.stringify(quote._id)}/>
            )
        })}
        </Fragment>
    )
}

export default AllQuotes;
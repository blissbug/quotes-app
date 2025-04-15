import Quote from "../models/Quote.js";

async function getHome(req,res){
    try{
        let allQuotes = await Quote.find({});
        res.status(200).json(allQuotes);
    }
    catch{
        res.status(404).json({message:"Error Occured"});
    }
       
}

export default getHome;
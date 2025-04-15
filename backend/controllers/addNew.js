import Quote from "../models/Quote.js";

async function addNewQuote(req,res){
        console.log(req.body);
        let {author,quote} = req.body;
        await Quote.create({author,quote})
        res.status(200).json({message:"Created Successfully"});
}

export default addNewQuote;
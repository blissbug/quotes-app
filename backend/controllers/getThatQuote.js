import Quote from "../models/Quote.js";
async function getThatQuote(req,res){
    let id=req.params.id;
    console.log(id);
    try{
        let resp = await Quote.findOne({_id:id});
        res.status(200).send({author:resp.author,id:resp._id,quote:resp.quote});
    }
    catch(err){
        res.status(404).send({message:err});
    }
}

export default getThatQuote;
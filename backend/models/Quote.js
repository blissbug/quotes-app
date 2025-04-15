import mongoose from "mongoose";

let QuoteSchema=mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    quote:{
        type:String,
        required:true,
        trim:true,
    }
})

let Quote = mongoose.model("Quote",QuoteSchema);

export default Quote;
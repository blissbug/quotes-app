import mongoose from "mongoose";
import Quote from "./models/Quote.js";

let QuoteSet = [
    {
        author:"bellla",
        quote:"you wont miss this!"
    },
    {
        author:"sticha",
        quote:"i could really use a wish rn!"
    },
    {
        author:"huruio",
        quote:"heartbreaks dont hurt!"
    },
    {
        author:"genie",
        quote:"smashing and crashing!"
    },
];

async function SeedDB(){
    await Quote.insertMany(QuoteSet);
    console.log("DB Seeded");
}

export default SeedDB;
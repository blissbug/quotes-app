import { connectDB } from "./index.js";
import app from "./index.js";

connectDB();

app.listen(3000,()=>{
    console.log("app is active");
})
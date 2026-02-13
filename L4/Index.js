import express from "express";

// instance creation
const app = express();

app.get('/home',(req,res) => {
    res.send("Hello world");
})

const PORT=4000;
app.listen(PORT,() => {
    console.log(`Our first Epress.js server is ready and running ... ${PORT}`);
});
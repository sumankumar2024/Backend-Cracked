// 1. import the http module
const http = require ("http");

// 2. create server

const server = http.createServer((req,res) => {

    // This function runs every time a request hits the server

    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');

    //send the response body and end the connection
    res.end("Hello ! This is your Node.js server speaking...");
});

// 3. listen on a specific port 

const PORT=3000;
server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})
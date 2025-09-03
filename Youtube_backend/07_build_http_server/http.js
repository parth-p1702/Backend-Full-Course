import fs from 'fs';
import http from 'http';

const server = http.createServer((req,res)=>{

    const log = `${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile("log.txt", log, (err,data)=>{
        switch(req.url){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("About Page");
                break;
            default:
                res.end("404 Not Found");
        }
    })
    
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})
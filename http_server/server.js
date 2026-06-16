 const http=require('http');
 const fs=require('fs');
 //create a log file,append data
 fs.writeFileSync('./logs/log.txt','Server Started Successfully');

//createServer() creates an HTTP server that listens for client requests and sends responses.
const server=http.createServer((req,res)=>
 {

   fs.appendFileSync('./logs/log.txt',`\nNew User visited${req.url}`);
   //The Request Object contains information sent by the client such as URL, method, headers, and query parameters.
  if(req.url==='/'){
    fs.readFile('./pages/home.html',(err, data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
      //The Response Object is used to send data from the server back to the client.
    });
  }

  else if(req.url==='/about'){
    fs.readFile('./pages/about.html',(err,data)=>{

      //An HTML Response sends HTML content to the browser instead of plain text.
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    });
  }

  else if(req.url==='/contact'){
    fs.readFile('./pages/contact.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    });
  }
  else if(req.url==='./users'){
    fs.readFile('./data/users.txt','utf-8',(err,data)=>
    {
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.end(data);
    });
  }
//Why Pipe? File --> Stream --> Response instead of File --> RAM --> Response
//Much faster for huge files.
  else if(req.url === '/stream'){

    res.writeHead(200,{
        'Content-Type':'text/plain'
    });

    //Streams process data in small chunks instead of loading the entire file into memory.
    const stream = fs.createReadStream('./data/users.txt','utf8');

    stream.pipe(res);//A Pipe connects a readable stream directly to a writable stream.readableStream.pipe(writableStream);
}
//create download route File Download is sending a file from the server so the browser downloads it instead of displaying it.
else if(req.url==='/download'){
  res.writeHead(200,{'content-disposition':'attachment; filename="users.txt"'});

  fs.createReadStream('./data/users.txt').pipe(res);
}
  
  else{
    res.writeHead(400);
  res.end("Page Not Found")
}

//   res.writeHead(200,{
//     'Content-Type':'text/html'
//   });
// res.end(`
//   <h1>Welcome to Node.js</h1>
//   <p>Http server is running</p>
//   `);
 });

 

 server.listen(3000,()=>
{
  console.log("server running on port 3000");
});


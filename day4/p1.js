const http=require('http');
const server =http.createServer(req,res)=>{
    res.writeHead(200,{'Content-Type':'applicatio/json'});
    {
        const data = {'jhon dee',age:30};
        res.end(JSON.stringify(data));
    }
    else if(req.url==='/setdata'&& req.method==='POST')
        {
            let body='';
            req.on('data',chunk=>{
                body +=chunk.toString();
                });
                req.on('end',()=> {
                    const data = JSON.parse(body);
                    console.log('New data recived:${JSON.stringify(newData)}');
                    res.end('Data set successfully');
                });
        }
};
var http = require('http');

books = [
    {
        "id": 1,
        "book": 1,
        "date": "2021-12-10"
   },
   {
        "id": 2,
        "book": 1,
        "date": "2021-12-20"
   }
]
let data = JSON.stringify(books);

http.createServer(function (_, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    };
    res.writeHead(200, headers)
    res.write(data); 
    res.end(); 
}).listen(8100); 

const fs = require('fs');   
const http = require ('http');
const url = require ('url');


/////// Files 
//Blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('File Written!!');


//non Blocking, asynchronous way
// fs.readFile('./starter/txt/start.txt', 'utf-8',(err, data1) => {
//     if (err) return console.log('Error !! Duaar');
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./starter/txt/append.txt`,'utf-8',(err, data3) => {
//             console.log(data3);

//             fs.writeFile(`./starter/txt/final.txt`, `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written :)')
//             })
//         })
//     })
// })

// console.log('Will Read File');

/////// Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => {
    const pathName = req.url;

    // overview page
    if (pathName === '/' || pathName === '/overview'){

        res.end('This is an OVERVIEW');
    
    //product page
    } else if (pathName === '/product'){
     res.end('This is a PRODUCT');

    //API
    }else if (pathName === '/api'){
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(data);
    
    //Not found
    } else{
        res.writeHead(404, {
            'Content-type':'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page not Found</h1>');
    }
});

server.listen(3300, '127.0.0.1', () =>{
    console.log('listening to the request on port 3300');
});

const http = require('http');

const server = http.createServer((req,res)=> {
//     // using if statement
//     if(req.url === '/'){
//         res.end('Welcome to our Home Page')
//     } else if(req.url === '/about'){
//         res.end('Welcome to our About page')
//     } else {
//     res.end(`
//     <h1>Oops !!!</h1>
//     <p>Page Not Found</p>
//     <a href="/">Back Home</a>
//     `)
// }

// using switch statement
switch (req.url){
    case '/':
        res.end('Welcome to our Home Page2');
        break;
    case '/about':
        res.end('Welcome to our About page2');
        break;
    default:
        res.end(`
            <h1>Oops !!!</h1>
            <p>Page Not Found2</p>
            <a href="/">Back Home</a>
            `);
        break;
}

})

server.listen(5000)
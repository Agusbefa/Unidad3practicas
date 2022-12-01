const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'application/json' });
    let salida = {
        nombre: 'Agustin',
        edad: 22,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(3000);

console.log('Escuchando el puerto 3000');
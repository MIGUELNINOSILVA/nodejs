//Importación del módulo global HTTP
const http = require('http');


// function requesListener(req, res) {
//     //Puede ser una funcion anonima
// }

//Creación de servidor web
const server = http.createServer((req, res) => {
    const url = req.url;
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    //routing
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Hola desde node js</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Enviar</button></form></body>');
        res.write('</html>');
        res.end();
    }
    //Enviando respuestas 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Titulo de la pagina</title></head>');
    res.write('<body><h1>Hola después de enviar formulario</h1></body>');
    res.write('</html>');

});

server.listen(4000);
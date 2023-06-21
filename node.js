const http = require('http');
const mysql = require('mysql');



const server = http.createServer((req,res)=>{
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Hola desde /</title></head>');
        res.write('<body><h1>Desde /</h1> <a href="/users">Users</a><br><a href="/categories">Categories</a><br><a href="/products">Products</a><br><a href="/employees">Employees</a><br><a href="/customers">Customers</a><br><a href="/sales">Sales</a><br><a href="/shopping">Shopping</a>');
        res.write('<ul class="clientes">');
        res.write('<li>li1</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Hola desde users</title></head>');
        res.write('<body><h1>Desde users</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/categories') {
        res.write('<html>');
        res.write('<head><title>Hola desde categories</title></head>');
        res.write('<body><h1>Desde categories</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url == '/products') {
        res.write('<html>');
        res.write('<head><title>Hola desde products</title></head>');
        res.write('<body><h1>Desde products</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url == '/employees') {
        res.write('<html>');
        res.write('<head><title>Hola desde employees</title></head>');
        res.write('<body><h1>Desde employees</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url == '/customers') {
        res.write('<html>');
        res.write('<head><title>Hola desde customers</title></head>');
        res.write('<body><h1>Desde customers</h1>');
        res.write('<form method="POST" action="/create-customers">');
        res.write('<input type="text" placeholder="Nombre del cliente" name="nombreCliente"> <br>');
        res.write('<input type="number" placeholder="Constructora id 1 o 2" name="constructoraCliente"> <br>');
        res.write('<input type="text" placeholder="Direccion del cliente" name="direccionCliente"> <br>');
        res.write('<input type="number" placeholder="Telefono del cliente" name="telefonoCliente"> <br>');
        res.write('<button type="submit">Enviar</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/sales') {
        res.write('<html>');
        res.write('<head><title>Hola desde sales</title></head>');
        res.write('<body><h1>Desde sales</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/shopping') {
        res.write('<html>');
        res.write('<head><title>Hola desde shopping</title></head>');
        res.write('<body><h1>Desde shopping</h1></body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/create-customers') {
        res.write('<html>');
        res.write('<head><title>Hola desde cliente creado</title></head>');
        res.write('<body><h1>Desde Cliente creado</h1></body>');
        res.write('</html>');
        res.end();
    }
    const conexion = mysql.createConnection({
        host: 'localhost',
        database: 'alquilartemis',
        user: 'root',
        password: ''
    });
    
    conexion.connect(function (err){
        if (err) {
            throw error;
        }else{
            console.log("CONEXIÓN EXITOSA");
        }
    });

    conexion.query('SELECT * FROM cliente', function (error, results, field) {
        if (error) {
            throw error;
        }
        let datos = [];
        results.forEach(result => {
            datos.push(result);
            // console.log(result);
        });
        console.log(datos);
    });
    conexion.query('SELECT * FROM empleado', function (error, results, field) {
        if (error) {
            throw error;
        }else{
            let empleado = [];
            results.forEach(resultado => {
                empleado.push(resultado);
            });
            console.log(empleado);
        }
    });
});

server.listen(7000);
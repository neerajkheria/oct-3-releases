const http = require('http')

const hostname = '0.0.0.0'
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end(`Welcome to NodeJs App from ${environment} environment\n`);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/ in ${environment} mode.`)
})

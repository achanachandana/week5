// Import the http module
const http = require('http');

// Define the server's request handler
const server = http.createServer((req, res) => {
    // Set the response header with a status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body
    res.end('Hello, World!\n');
});

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

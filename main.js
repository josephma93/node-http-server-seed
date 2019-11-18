const http = require('http');
const server = http.createServer(onRequest);

server.on('request', onRequest);
server.on('clientError', onClientError);
server.on('listening', onListening);

server.listen(process.env.PORT || 3000);

/**
 * Emitted each time there is a request.
 * @param {http.IncomingMessage} req Object is created by http.Server. Used to access response status, headers and data
 * @param {http.ServerResponse} res Object created internally by an HTTP server
 */
function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
}

/**
 * If a client connection emits an 'error' event, it will be forwarded here.
 * @param {Error} err An instance of Error
 * @param {net.Socket} socket The Socket object where the error originated from
 */
function onClientError(err, socket) {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
}

/**
 * Emitted when the server has been bound after calling server.listen().
 */
function onListening() {
    console.info(`Server listening at http://localhost:${server.address().port}`);
}

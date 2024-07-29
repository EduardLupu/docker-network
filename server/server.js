const net = require('net');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.txt');

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Received: ${message} from ${socket.remoteAddress}:${socket.remotePort}`);

        fs.appendFile(dataFilePath, `${message}\n`, (err) => {
            if (err) {
                console.error('Failed to write data to file', err);
            } else {
                console.log('Data saved to file');
            }
        });

        socket.write(`Server received: ${message}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(4242, () => {
    console.log('Server listening on port 4242');
});

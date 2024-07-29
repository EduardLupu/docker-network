const net = require('net');
const readline = require('readline');

const client = new net.Socket();

client.connect(4242, 'server', () => {
    console.log('Connected to server');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('Enter message: ');
    rl.prompt();

    rl.on('line', (line) => {
        client.write(line);
        rl.prompt();
    });
});

client.on('close', () => {
    console.log('Connection closed');
});

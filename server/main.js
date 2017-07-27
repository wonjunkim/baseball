import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const app = express();
const http = http.createServer(app);
const io = socketIo(http);
const port = 3000;
const devPort = 3001;


if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => {
    return res.send('Can you hear me?');
});


import posts from './routes/posts';
app.use('/posts', posts);

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});

// Socket.io
io.on("connection", function(socket) {
    console.log("we have a connection");
    socket.on("new-message", function(msg) {
        console.log(msg);
        io.emit("receive-message", msg);
    })
})


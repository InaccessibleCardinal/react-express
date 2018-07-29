const https = require('https');
module.exports = (app) => {
    app.get('/users', getFromRemote('users'));
    app.get('/posts', getFromRemote('posts'));
    app.get('/comments', getFromRemote('comments'));
    app.get('/albums', getFromRemote('albums'));
    app.get('/todos', getFromRemote('todos'));

}

function getFromRemote(value) {
    return (request, response) => {
        let url = `https://jsonplaceholder.typicode.com/${value}`;
        https.get(url, (res) => {
            let body = '';
            res.on('data', (d) => {
                body += d;
            });
            res.on('end', () => {
                let json = JSON.parse(body);
                response.status(200).json(json);
            });
        });
    }
    
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const headerMiddleware = require('./headerMiddleware');
const router = require('./apis/router');
const graphQL = require('./apis/graphQL');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('dist'));
app.use(headerMiddleware);

router(app);
graphQL(app);


app.get('/', (req, res) => {
    res.status(200).json({data: 'testing...'});
});

app.listen(8000, () => {
    console.log('app is listening on 8000...');
});
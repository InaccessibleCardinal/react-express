const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');

let schema = buildSchema(
    `type Query {
        message: String
    }
    `
);

let root = {
    message: () => 'Hello, not sure how this all works yet...'
};

module.exports = function(app) {
    app.use('/graphql', express_graphql({
        schema: schema,
        rootValue: root,
        graphql: true
    }));
};
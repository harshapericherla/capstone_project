const express = require('express');
const app = express();

require('./mogo_schema/data_source');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./graphql_server/schema');
const resolvers = require('./graphql_server/resolvers');

const server = new ApolloServer({
                typeDefs,
                resolvers,
                introspection: true,
                playground: true
            });

server.applyMiddleware({app});
require('./webpackinit')(app);
app.listen(5000,'0.0.0.0');
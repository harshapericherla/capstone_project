const express = require('express');
const app = express();

require('./mogo_schema/data_source');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./graphql_server/schema');
const resolvers = require('./graphql_server/resolvers');
const context = require('./graphql_server/context');

const server = new ApolloServer({
                context,
                typeDefs,
                resolvers,
                introspection: true,
                playground: true
            });

require("./auth/passport")(app);
server.applyMiddleware({app});
require('./webpackinit')(app);
app.listen(5000);
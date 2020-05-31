const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql_server/schema');
const resolver = require('./graphql_server/resolvers');


const server = new ApolloServer({
                typeDefs,
                resolver
            });

server.listen(4000);
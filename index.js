const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql_server/schema');
const resolvers = require('./graphql_server/resolvers');


const server = new ApolloServer({
                typeDefs,
                resolver
            });

server.listen(4000);
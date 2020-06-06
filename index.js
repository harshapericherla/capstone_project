require('./mogo_schema/data_source');
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./graphql_server/schema');
const resolvers = require('./graphql_server/resolvers');

const server = new ApolloServer({
                typeDefs,
                resolvers
            });

server.listen(4000);
const express = require('express');
const { ApolloServer } = require('apollo-server-express');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

//create port
const PORT = process.env.PORT || 3001;
//start our app
const app = express();

// graph ql server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//graph ql
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

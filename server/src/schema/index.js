const { GraphQLSchema } = require('graphql');

const query = require('./rootQueryType');
// const mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query
  // mutation: mutations
});

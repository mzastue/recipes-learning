const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
 } = require('graphql');
 const Author = mongoose.model('author');

module.exports = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    recipes: {
      type: new GraphQLList(require('./Recipe')),
      resolve (root, args) {
        return Author.findRecipes(root.id);
      }
    }
  }),
});

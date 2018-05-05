const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
const AuthorType = require('./type/Author');
const Author = mongoose.model('author');
const Recipe = mongoose.model('recipe');

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    author: {
      type: AuthorType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve (root, { id }) {
        return Author.findById(id);
      }
    },
    recipe: {
      type: require('./type/Recipe'),
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve (root, args) {
        return Recipe.findById(args.id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve () {
        return Author.find({});
      }
    }
  })
});

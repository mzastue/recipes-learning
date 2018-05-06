const mongoose = require('mongoose');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
 } = require('graphql');
 const Recipe = mongoose.model('recipe');

 module.exports = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    author: {
      type: require('./Author'),
      resolve (root, args) {
        return Recipe.findById(root)
          .populate('author')
          .then(recipe => recipe.author)
        ;
      }
    }
  }),
});

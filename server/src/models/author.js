const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  recipes: [{ type: Schema.Types.ObjectId, ref: 'recipe' }]
});

AuthorSchema.statics.findRecipes = id => {
  return this.findById(id)
    .populate('recipes')
    .then(author => author.recipes)
  ;
}

mongoose.model('author', AuthorSchema);

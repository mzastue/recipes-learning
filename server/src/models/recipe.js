const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  name: { type: String },
  description: { type: String, default: '' },
  author: { type: Schema.Types.ObjectId, ref: 'author' }
});

mongoose.model('recipe', RecipeSchema);

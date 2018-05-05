const mongoose = require('mongoose');
const MONGO_URI = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ds117010.mlab.com:17010/${process.env.MONGODB_DB_NAME}`;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MLab.'))
  .on('error', error => console.log('Error during connect to MLab: ', error))
;

module.exports = mongoose;
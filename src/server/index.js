const express = require('express');
const expressGraphQL = require('express-graphql');
const dotenvConfig = require('dotenv-safe').config();
const mongoose = require('./config/mongoose');
const models = require('./src/models');
const schema = require('./src/schema/index');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));


app.listen(PORT, () => {
  console.log('Listening on PORT ', PORT);
});

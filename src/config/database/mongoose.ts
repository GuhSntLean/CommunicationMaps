const mongoose = require("mongoose");
const urlConnection = process.env.URL_DATABASE;

mongoose.connect( urlConnection ,{ useNewUrlParser: true, useUnifiedTopology: true });

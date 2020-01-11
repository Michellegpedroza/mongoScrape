//config ~ index.js
module.exports = require('mongoose')
  .connect(process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOMEWORK INSTRUCTIONS FOR DEPLOYMENT:
// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoose.connect(MONGODB_URI);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

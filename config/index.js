//config ~ index.js
module.exports = require('mongoose')
  .connect("mongodb://<dbuser>:<dbpassword>@ds361768.mlab.com:61768/heroku_xm5x6mlc", {
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

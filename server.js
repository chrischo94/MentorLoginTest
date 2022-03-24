require('dotenv').config({path: "./config.env"});
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const errorHandler = require('./middleware/error')

//connect DB
connectDB();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// //routes

app.use(routes);

//Error Hangler (should be last piece of middleware)
app.use(errorHandler);

const server = app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1))
})

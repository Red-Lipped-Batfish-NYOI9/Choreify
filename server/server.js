const express = require("express");
const path = require("path");
const apiRouter = require("./routes/api");

const app = express();

app.use(express.json());

//Logs all incoming request
app.use("*", (req, res, next) => {
  console.log(`
  #######\n
  URL: ${req.method} ${req.url}\n
  Params: ${JSON.stringify(req.params)}\n
  Body: ${JSON.stringify(req.body)}
  Req: ${req}
  #######
  `);
  next();
});

// serve everything from the build folder
app.use("/build", express.static(path.join(__dirname, "../client/build")));
// serve index.html to any get request on the path '/'
app.get("/", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"))
);

// will send any calls to our page through our proxy server
app.use("/api", apiRouter);

// 404 error handler
app.use("/*", (req, res) => {
  res.status(404).send("Error: This page does not exist!");
});

// global error handler
app.use("/", (err, req, res, next) => {
  const defaultErr = {
    log: "Gloval error handler caught an error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = { ...defaultErr, err };
  res.status(errorObj.status).json(errorObj.message);
});

// Starts the server on port 3000
app.listen(3000, (err) => {
  if (err) console.log("Error setting up server");
  console.log("Choreify server running and ready to work :)");
});

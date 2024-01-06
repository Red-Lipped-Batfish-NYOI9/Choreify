const express = require('express');
const path = require('path');

const app = express();

// serve everything from the build folder
app.use('/build', express.static(path.join(__dirname, '../client/build')));
// serve index.html to any get request on the path '/'
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.listen(3000);

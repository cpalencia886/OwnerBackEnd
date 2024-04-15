// app.js

const express = require('express');
const bodyParser = require('body-parser');
const officeRoutes = require('./routes/officeRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(officeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(4500, function () {
    console.log("test server is running")
})
var userRoute = require('./src/routes/userRoute');
app.use('/api', userRoute);
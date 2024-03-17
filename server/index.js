const connectToMongo = require('./db');
const express = require("express");
connectToMongo();
const app = express();
const port = 3000;
app.use('/api/signup', require('./routes/SignUp'));
app.get('/', (req, res) =>{
    res.status(200).render("../../client/src/Signup.js")
});
app.listen(port, () =>{
    console.log(`App is listening at http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.inputEmail;
})

app.listen(3000, () => {
    console.log('Server started on port 3000.');
});
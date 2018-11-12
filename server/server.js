const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('this is working.')
})

app.listen(3000, () => {
    console.log('app is running biatch 3000')
})


// TO-DO
// res = this is working
// /signin -> post = success/fail
// /register - > post = user
// /profile/userID -> get = user
// /image -> PUT -> user
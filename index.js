let express = require('express');
let app = express();

app.use('/', express.static('public'));

// app.get('/', (request, response) => {
//     response.send("homepage");
// })

// app.get('/eightball', (request, response) => {
//     response.send("eightball");
// })

// app.get('/about', (request, response) => {
//     response.send("about Mishka");
// })

app.listen(3000, () => {
    console.log("app is listening at localhost:3000");
})
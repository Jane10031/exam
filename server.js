const express = require('express');
const app = express();

// GET '/' 時の挙動
app.get('/', (req, res) => {
    res.status(200).send('hello world\n');
});

app.get('/user/:id/:name', (req, res) => {
    // :idをreq.params.idとして受け取る
    res.status(200).send('user ID: '+req.params.id+'\n'+'user name: '+req.params.name);
    console.log('--- acess ---');
    console.log('id:'+req.params.id);
    console.log('name:'+req.params.name);
});

app.listen(3000, () => {
    console.log('start listening');
});
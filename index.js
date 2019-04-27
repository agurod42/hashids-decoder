const express = require('express');
const Hashids = require('hashids');

const app = express();

app.get('/decode', function (req, res) {
    if (!req.query.id) return res.sendStatus(400);
    if (!req.query.salt) return res.sendStatus(400);

    const hashids = new Hashids(req.query.salt, req.query.length);
    res.send(hashids.decode(req.query.id));
});

app.get('/encode', function (req, res) {
    if (!req.query.hash) return res.sendStatus(400);
    if (!req.query.salt) return res.sendStatus(400);

    const hashids = new Hashids(req.query.salt, req.query.length);
    res.send(hashids.encode(req.query.hash));
});

app.listen(process.env.PORT || 4000, function () {
    console.log('hashids-decoder listening on port 4000!');
});

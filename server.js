'use strict'

var express = require('express'),
    app = express(),
    pug = require('pug');

app.use('/', (req,res) => res.send("Hello"))

app.listen(3000, () => console.log("On 3000"))

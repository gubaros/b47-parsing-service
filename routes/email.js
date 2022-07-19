var express = require('express');
var router = express.Router();
const simpleParser = require('mailparser').simpleParser;

/* GET Email */
router.get('/', function(req, res, next) {
    const body = req.body.body;
    console.log(body);
    const source = body;
    const options = {};
    const headers = {};

    simpleParser(source, options, (err, parsed) => {
        console.log(`To: ${parsed.to.text}`);
        console.log(`From: ${parsed.from.text}`);
        console.log(`Subject: ${parsed.subject}`);
        console.log(`Message-id: ${parsed.messageId}`);
    });
    res.send();
});

module.exports = router;
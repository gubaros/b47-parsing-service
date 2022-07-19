const express = require('express');

const router = express.Router();
const { simpleParser } = require('mailparser');
const business = require('../business');

/* GET Email */
router.get('/', (req, res) => {
  const { body } = req.body;
  /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  console.log(body);
  const source = body;
  const options = {};

  simpleParser(source, options, (err, parsed) => {
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.log(`To: ${parsed.to.text}`);
    console.log(`From: ${parsed.from.text}`);
    console.log(`Subject: ${parsed.subject}`);
    console.log(`Message-id: ${parsed.messageId}`);
    try {
      business.mailHeaders();
      business.mailBody();
      business.mailAttachments();
    } catch (err) {
      /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.log(err);
    }
  });
  res.send();
});

module.exports = router;

const express = require('express');

const router = express.Router();
const { simpleParser } = require('mailparser');

/* Bravo47 middleware */
const business = require('../business');
const validator = require('../validator');

console.log(validator);

/* GET Email */
router.get('/', (req, res) => {
  const { body } = req.body;
  const { messageId } = req.body;
  const { recordId } = req.body;

  /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
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

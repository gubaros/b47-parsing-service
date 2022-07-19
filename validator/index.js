class Validator {
  /* the Validator class operates as a middleware that delivers validations cross app */
  constructor(recordId, root) {
    this.record_id = recordId;
    this.root = root;
  }

  checkId() {
    return `${this.record_id}`;
  }
}
module.exports = Validator;

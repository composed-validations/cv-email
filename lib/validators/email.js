EXPRESSION = require('../email_expression.js');

module.exports = function(cv) {
  return {
    test: function(value) {
      if (!!EXPRESSION.exec(value)) {
        return value;
      } else {
        throw new cv.error("is not a valid email", value, this);
      }
    }
  };
};

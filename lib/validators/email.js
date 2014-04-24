EXPRESSION = require('../email_expression.js');

module.exports = function(cv) {
  return function() {
    return {
      test: function(value) {
        if (!!EXPRESSION.exec(value)) {
          return value;
        } else {
          throw new cv.ValidationError("is not a valid email", value, this);
        }
      }
    };
  };
};

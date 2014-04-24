var errorMessage, validationsLibrary, validator;

validationsLibrary = require("composed-validations");
emailValidator     = require("../../lib/validators/email.js")(validationsLibrary);
errorMessage       = "is not a valid email";

describe("Email Validator", function() {
  describe("Passing Invalid Email", function() {
    it("expect to fail passing bad email", function() {
      expect(function() {
        emailValidator.test("shit email");
      }).throw(errorMessage);

      expect(function() {
        emailValidator.test("#@%^%#$@#$@#.com");
      }).throw(errorMessage);

      expect(function() {
        emailValidator.test("あいうえお@example.com");
      }).throw(errorMessage);

      expect(function() {
        emailValidator.test('"(),:;<>[\]@example.com');
      }).throw(errorMessage);
    });
  });

  describe("Passing Valid Email", function() {
    it("expect to pass with valid emails", function() {
      expect(emailValidator.test("mylovely@email.com")).to.eq("mylovely@email.com");
      expect(emailValidator.test("$@dot.com")).to.eq("$@dot.com");
      expect(emailValidator.test("'@dot.com")).to.eq("'@dot.com");
      expect(emailValidator.test("_crazy_200_%@mylovely@email.com")).to.eq("_crazy_200_%@mylovely@email.com");
    });
  });
});

Email Validator Plugin for Composed Validations Library
==============================

[![Build Status](https://drone.io/github.com/composed-validations/cv-email/status.png)](https://drone.io/github.com/composed-validations/cv-email/latest)

This is the Official Email Validator Plugin for the Composed Validations Library. The regex used in this plugin is based on the most pratical RFC 5322 standard. You can read more about the standard and the regex itself in: [http://www.regular-expressions.info/email.html](http://www.regular-expressions.info/email.html).

# Installation
```
npm install cv-email
```

# How to Use
```javascript
var validations    = require('composed-validations');
var emailValidator = require('cv-email')(validations);

emailValidator.test("some@email.com"); // will return some@email.com
emailValidator.test("wrong email"); // false (will throw an error with the error message: is not a valid email)

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://djalmaaraujo.mit-license.org)

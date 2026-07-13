const { body, validationResult } = require('express-validator');

const validationRules = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const validate = (req, res, next) => {
  validationRules.map(rule => rule.run(req));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = validate;
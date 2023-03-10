const BearerStrategy = require('passport-http-bearer').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const bearerStrategy = new BearerStrategy(async (token, done) => {
  try {
    const check = jwt.verify(token, process.env.APP_SECRET);
    done(null, check, { token });
  } catch (err) {
    done(err);
  }
});

passport.use(bearerStrategy);

const authenticationBearer = passport.authenticate('bearer', { session: false });

module.exports = authenticationBearer;

import bcrypt from 'bcryptjs';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, {
          message: `Check input! Cannot find user with ${email}.`,
        });
      }
      const passwordValidation = await bcrypt.compare(password, user.password);
      if (!passwordValidation) {
        return done(null, false, { message: 'Invalid password!' });
      }
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  },
);

const bearerStrategy = new BearerStrategy(async (token, done) => {
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET);
    const user = await User.findById(payload.id);
    done(null, user, { token });
  } catch (err) {
    done(err);
  }
});

passport.use(localStrategy);
passport.use(bearerStrategy);

export const authenticationLocal = passport.authenticate('local', { session: false });
export const authenticationBearer = passport.authenticate('bearer', { session: false });

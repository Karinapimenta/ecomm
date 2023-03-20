/* eslint-disable object-shorthand */
import bcrypt from 'bcryptjs';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../models/apiUser.js';
import { findToken } from '../../redis/tokenList.js';

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
    await findToken(token);
    done(null, payload, { token: token });
  } catch (err) {
    done(err);
  }
});

passport.use(localStrategy);
passport.use(bearerStrategy);

export const authenticationLocal = (req, res, next) => {
  passport.authenticate('local', { session: false }, (erro, usuario, info) => {
    if (!usuario) {
      return res.status(401).json({ info });
    }
    req.user = usuario;
    return next();
  })(req, res, next);
};
export const authenticationBearer = (req, res, next) => {
  passport.authenticate('bearer', { session: false }, (erro, usuario, info) => {
    if (erro) {
      return res.status(500).json({ erro });
    }
    if (!usuario) {
      return res.status(401).json({ erro, usuario, info });
    }
    req.token = info.token;
    return next();
  })(req, res, next);
};

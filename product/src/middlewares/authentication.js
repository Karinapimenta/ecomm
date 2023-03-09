/* eslint-disable import/no-extraneous-dependencies */
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const bearerStrategy = new BearerStrategy(async (token, done) => {
  try {
    const check = jwt.verify(token, process.env.APP_SECRET);
    done(null, check, { token });
  } catch (err) {
    done(err);
  }
});

passport.use(bearerStrategy);

export const authenticationBearer = passport.authenticate('bearer', { session: false });

import { x } from './searchUserAccountByEmail.test.js';
import { users } from './createUserAccount.test.js';
import { removeUserAccountUseCase } from '../src/use-case/removeUserAccount.js';

removeUserAccountUseCase(x, users);

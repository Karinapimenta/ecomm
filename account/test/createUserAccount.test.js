import { users, createUserUseCase } from '../src/use-case/createUserAccount.js';

createUserUseCase('Karina', 'karina@company.com', '12345');
createUserUseCase('Carol', 'carol@company.com', '1234');
createUserUseCase('Vanessa', 'vanessa@company.com', '12333');

console.log(users);
export { users };

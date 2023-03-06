import { users } from './inserirEnderecoUserAccount.test.js';
import { checkingSP } from '../src/use-case/usersAddressUserAccount.js';

const sp = checkingSP(users);

console.log(`Os clientes ${sp} moram em São Paulo. -------------------FIM CONSULTA------------------`);

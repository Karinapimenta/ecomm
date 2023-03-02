import { addAddressUseCase, checkUserAddressUseCase } from '../src/use-case/inserirEnderecoUserAccount.js';
import { createUserUseCase, users } from '../src/use-case/createUserAccount.js';

const nome = 'Karina';
const nome2 = 'Carol';
const nome3 = 'Vanessa';
createUserUseCase('Karina', 'karina@company.com', '12345');
createUserUseCase('Carol', 'carol@company.com', '1234');
createUserUseCase('Vanessa', 'vanessa@company.com', '12333');
const address1 = addAddressUseCase('Rua 123', 23, 'apt 123', 'Bairro 1', 35400000, 'OP', 'MG');
const address2 = addAddressUseCase('Rua xx', 20, 'apt xxx', 'Bairro 2', 35400000, 'OP', 'SP');
const address3 = addAddressUseCase('Rua xx', 2, 'apt xxx', 'Bairro 3', 35400000, 'OP', 'SP');
checkUserAddressUseCase(address1, nome);
checkUserAddressUseCase(address2, nome2);
checkUserAddressUseCase(address3, nome3);
export { users };

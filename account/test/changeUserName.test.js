import { x, emails } from './searchUserAccountByEmail.test.js';
import { changeUserNameUseCase } from '../src/use-case/changeUserName.js';

const newName = 'Karina Pimenta';
if (x === 'fail') {
  console.log('Nenhum dado foi alterado, pois o email é inexistente');
} else {
  const z = changeUserNameUseCase(emails[x], newName);
  if (z === 1) {
    console.log('Alteração concluída com sucesso! ========================== FIM!==========================');
  } else {
    console.log('Ocorreu algum erro, a alteração não pôde ser efetuada');
  }
}

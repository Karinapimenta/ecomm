export function searchUserAccountByEmailUseCase(email, teste) {
  let flag = 0;
  for (const element of email) {
    if (element === teste) {
      flag = 1;
      break;
    }
  }

  if (flag === 1) {
    console.log(`O email: ${teste} foi encontrado.`);
    return email.indexOf(teste);
  }
  console.log(`O email: ${teste} não existe`);
  return 'fail';
}

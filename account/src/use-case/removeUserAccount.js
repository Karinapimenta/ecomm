export function removeUserAccountUseCase(x, users) {
  if (x === 'fail') {
    console.log('Como usuário não existe nada foi deletado');
    console.log(users);
  } else {
    delete users[x];
    console.log(users);
  }
}

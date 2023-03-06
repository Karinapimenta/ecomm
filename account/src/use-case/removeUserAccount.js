export function removeUserAccountUseCase(x, users) {
  if (x === 'fail') {
<<<<<<< HEAD
    console.log('Como usuário não existe nada foi deletado');
=======
    console.log('Como usuário não existe, nada foi deletado');
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
    console.log(users);
  } else {
    delete users[x];
    console.log(users);
  }
}

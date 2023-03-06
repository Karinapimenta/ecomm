export const users = [];
export function createUserUseCase(nome, email, senha) {
<<<<<<< HEAD
  let dataCompleta = [];
  dataCompleta = new Date().toLocaleString('en-ca').split(',', 2);
=======
  const dataCompleta = new Date().toLocaleString('en-ca').split(',', 2);
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
  const user = {
    id: users.length + 1,
    name: nome,
    email,
    password: senha,
    date: dataCompleta[0],
  };
  return users.push(user);
}

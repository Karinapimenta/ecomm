export const users = [];
export function createUserUseCase(nome, email, senha) {
  let dataCompleta = [];
  dataCompleta = new Date().toLocaleString('en-ca').split(',', 2);
  const user = {
    id: users.length + 1,
    name: nome,
    email,
    password: senha,
    date: dataCompleta[0],
  };
  return users.push(user);
}

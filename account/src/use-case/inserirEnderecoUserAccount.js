import { users } from './createUserAccount.js';

export function addAddressUseCase(
  newLogradouro,
  newNumero,
  newComplemento,
  newBairro,
  newCep,
  newCidade,
  NewUf,
) {
  const endereco = {
    logradouro: newLogradouro,
    numero: newNumero,
    complemento: newComplemento,
    bairro: newBairro,
    cep: newCep,
    cidade: newCidade,
    uf: NewUf,
  };
  return endereco;
}

export function checkUserAddressUseCase(endereco, nome) {
  users.forEach((elemento) => {
    if (elemento.name.includes(nome)) {
      elemento.endereco = endereco;
    }
  });
}

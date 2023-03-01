import { users } from "./createUserAccount.js";
import { x } from "../../test/searchUserAccountByEmail.test.js";
export function changeUserNameUseCase(email, newName) {
  if (email == users[x].email) {
    users[x].name = newName;
    console.log(users);
    return true;
  } else {
    console.log(`Nenhum dado foi alterado.`);
    return false;
  }
}

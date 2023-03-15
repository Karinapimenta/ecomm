class DataCheck {
  static emailCheck(email, flag) {
    const rgxEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (rgxEmail.test(email) === false) {
      return flag.push('O EMAIL ESTÁ INVALIDO');
    }
  }

  static passwordCheck(password, flag) {
    const rgxpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,10}$/;
    if (rgxpass.test(password) === false) {
      return flag.push('A SENHA ESTÁ INVALIDA');
    }
  }

  static cpfCheck(cpf, flag) {
    const rgxCpf = /^(\d){11}$/;
    if (rgxCpf.test(cpf) === false) {
      return flag.push('O CPF ESTÁ INVALIDO');
    }
  }

  static phoneCheck(phone, flag) {
    const rgxPhone = /^(\d){11,13}$/;
    if (rgxPhone.test(phone) === false) {
      return flag.push('O TELEFONE ESTÁ INVALIDO');
    }
  }

  static zipCheck(zip, flag) {
    const rgxZip = /^(\d){8}$/;
    if (rgxZip.test(zip) === false) {
      return flag.push('O CÓDIGO POSTAL ESTÁ INVALIDO');
    }
  }

  static stateCheck(state, flag) {
    const rgxState = /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/gmi;
    if (rgxState.test(state) === false) {
      return flag.push('O ESTADO ESTÁ INVALIDO');
    }
  }
}

export default DataCheck;

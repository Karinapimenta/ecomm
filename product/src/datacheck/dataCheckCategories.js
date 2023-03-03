class DataCheck {
  static nameCheck(name, flag) {
    const rgxName = /^\D+\w{2,}$/;
    if (rgxName.test(name) === false) {
      return flag.push('O NOME ESTÁ INVALIDO');
    }
  }

  static statusCheck(status, flag) {
    if (typeof status !== 'boolean') {
      return flag.push('SLUG INVÁLIDA');
    }
  }
}
export default DataCheck;

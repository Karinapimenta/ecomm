class DataCheck {
  static nameCheck(name, flag) {
    const rgxName = /^\D+(\w*\d*\s*)*\S+$/;
    if (rgxName.test(name) === false) {
      return flag.push('O NOME ESTÁ INVALIDO');
    }
  }

  static slugCheck(slug, flag) {
    const rgxSlug = /^(\w+-?)*$/;
    if (rgxSlug.test(slug) === false) {
      return flag.push('SLUG INVÁLIDA');
    }
  }

  static priceCheck(price, flag) {
    if (price <= 0) {
      return flag.push('PREÇO INVÁLIDO');
    }
  }

  static quantityCheck(quantity, flag) {
    if (quantity <= 0 && quantity > 1000) {
      return flag.push('QUANTIDADE INVÁLIDA');
    }
  }
}
export default DataCheck;

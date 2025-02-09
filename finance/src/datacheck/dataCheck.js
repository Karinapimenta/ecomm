class DataCheck {
  static valueCheck(value, flag) {
    if (value <= 0) {
      return flag.push(' O VALOR DEVE SER MAIOR QUE ZERO');
    }
    return null;
  }

  static cardCheck(cardNumber, flag) {
    const rgxCard = /^\d{16}$/;
    if (rgxCard.test(cardNumber) === false) {
      return flag.push('CARTÃO INVÁLIDO');
    }
    return null;
  }

  static dateCheck(date, flag) {
    const rgxDate = /^(20[2-9]\d)-(0[1-9]|1[0-2])$/;
    if (rgxDate.test(date) === false) {
      return flag.push('DATA INVÁLIDA');
    }
    return null;
  }

  static cvvCheck(cvv, flag) {
    const rgxCvv = /^\d{3}$/;
    if (rgxCvv.test(cvv) === false) {
      return flag.push('CVV INVÁLIDA');
    }
    return null;
  }
}
module.exports = DataCheck;

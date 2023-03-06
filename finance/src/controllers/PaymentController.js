const database = require('../models');
const DataCheck = require('../datacheck/dataCheck.js');
const { host, port } = require('../utils/constantes.js');

class PaymentController {
  static async getOnePayment(req, res) {
    const { id } = req.params;
    try {
      const onePayment = await database.Payments.findOne({
        where: {
          id: Number(id),
        },
        attributes: {
          exclude: ['cvv', 'links', 'invoiceId'],
        },
      });
      if (onePayment != null) {
        return res
          .status(200)
          .location(`http://${host}:${port}/payments/${onePayment.id}`)
          .json(onePayment);
      } return res.status(404).send({ message: 'Payment not found' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async savePayment(req, res) {
    const newPayment = req.body;
    const flag = [];

    DataCheck.valueCheck(newPayment.value, flag);
    DataCheck.cardCheck(newPayment.number, flag);
    DataCheck.dateCheck(newPayment.expirationDate, flag);
    DataCheck.cvvCheck(newPayment.cvv, flag);
    newPayment.status = 'CRIADO';

    if (flag.length === 0) {
      try {
        const newPaymentCreated = await database.Payments.create(newPayment);
        const newFields = {
          links: [
            {
              rel: 'CANCELADO',
              method: 'PATCH',
              href: `http://localhost:3003/payments/${newPaymentCreated.id}/CANCELADO`,
            },
            {
              rel: 'CONFIRMADO',
              method: 'PATCH',
              href: `http://localhost:3003/payments/${newPaymentCreated.id}/CONFIRMADO`,
            },
          ],
        };
        await database.Payments.update(newFields, {
          where: { id: Number(newPaymentCreated.id) },
        });
        const finalPayment = await database.Payments.findOne({
          where: {
            id: Number(newPaymentCreated.id),
          },
          attributes: {
            exclude: ['cvv', 'client', 'invoiceId'],
          },
        });
        return res
          .status(201)
          .location(`http://localhost:3003/payments/${newPaymentCreated.id}`)
          .json(finalPayment);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    } else {
      return res.status(400).json(flag);
    }
  }

  static async updateStatus(req, res) {
    const { id, status } = req.params;
    const clientData = { ...req.body, paymentId: Number(id) };
    const rgxStatus = /^(\s*(CONFIRMADO|CANCELADO)?)$/;
    if (rgxStatus.test(status) === true) {
      if (status === 'CONFIRMADO') {
        try {
          const newInvoice = await database.Invoices.create(clientData);
          await database.Payments.update(
            { status, invoiceId: newInvoice.id },
            {
              where: {
                id: Number(id),
              },
            },
          );
          const payment = await database.Payments.findOne({
            where: {
              id: Number(id),
            },
            attributes: {
              exclude: ['cvv', 'links'],
            },
          });
          return res.status(200).json(payment);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      } else if (status === 'CANCELADO') {
        try {
          await database.Payments.update(
            { status },
            {
              where: {
                id: Number(id),
              },
            },
          );
          const payment = await database.Payments.findOne({
            where: {
              id: Number(id),
            },
            attributes: {
              exclude: ['cvv', 'links', 'invoiceId'],
            },
          });
          return res.status(200).json(payment);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    } else {
      return res.status(400).json('Status inválido');
    }
  }
}
module.exports = PaymentController;

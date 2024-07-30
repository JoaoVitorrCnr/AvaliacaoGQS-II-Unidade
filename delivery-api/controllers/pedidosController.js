const Pedido = require('../models/pedido');

exports.getPedidos = (req, res) => {
  res.json(Pedido.findAll());
};

exports.createPedido = (req, res) => {
  const pedido = Pedido.create(req.body);
  res.status(201).json(pedido);
};

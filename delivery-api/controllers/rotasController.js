const Rota = require('../models/rota');
const Pedido = require('../models/pedido');

exports.getRotas = (req, res) => {
  res.json(Rota.findAll());
};

exports.createRota = (req, res) => {
  const rota = Rota.create(req.body);
  res.status(201).json(rota);
};

exports.getMelhorRota = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const rota = Rota.findAll().find(r => r.id === id);

    if (!rota) {
      return res.status(404).json({ message: 'Rota não encontrada' });
    }

   
    const pedidos = Pedido.findAll();
    const melhorRota = pedidos.map(pedido => ({
      pedidoId: pedido.id,
      endereco: pedido.endereco
    }));

    res.json(melhorRota);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno no servidor', error: error.message });
  }
};

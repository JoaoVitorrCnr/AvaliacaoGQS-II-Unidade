let pedidos = [];

class Pedido {
  constructor(endereco, latitude, longitude, produto, quantidade) {
    this.id = pedidos.length + 1;
    this.endereco = endereco;
    this.latitude = latitude;
    this.longitude = longitude;
    this.produto = produto;
    this.quantidade = quantidade;
  }

  static findAll() {
    return pedidos;
  }

  static create(data) {
    const pedido = new Pedido(data.endereco, data.latitude, data.longitude, data.produto, data.quantidade);
    pedidos.push(pedido);
    return pedido;
  }
}

module.exports = Pedido;

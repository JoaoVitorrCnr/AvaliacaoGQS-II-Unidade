let rotas = [];

class Rota {
  constructor(latitude, longitude) {
    this.id = rotas.length + 1;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  static findAll() {
    return rotas;
  }

  static create(data) {
    const rota = new Rota(data.latitude, data.longitude);
    rotas.push(rota);
    return rota;
  }
}

module.exports = Rota;

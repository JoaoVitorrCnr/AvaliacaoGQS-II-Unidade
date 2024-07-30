const express = require('express');
const app = express();
const pedidosRoutes = require('./routes/pedidosRoutes');
const rotasRoutes = require('./routes/rotasRoutes');

app.use(express.json());
app.use('/pedidos', pedidosRoutes);
app.use('/rotas', rotasRoutes);

module.exports = app;

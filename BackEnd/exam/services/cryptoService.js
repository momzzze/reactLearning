const Crypto = require('../models/Crypto');


exports.create = (cryptoCoin) => Crypto.create(cryptoCoin);
exports.getAll = () => Crypto.find();
exports.findOne = (cryptoId) => Crypto.findById(cryptoId);
exports.delete = (cryptoId) => Crypto.findByIdAndDelete(cryptoId);
exports.update = (cryptoId, body) => Crypto.findOne({ _id: cryptoId }, { $set: body });
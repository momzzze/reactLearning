const fs = require('fs/promises');
const path = require('path');

const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);

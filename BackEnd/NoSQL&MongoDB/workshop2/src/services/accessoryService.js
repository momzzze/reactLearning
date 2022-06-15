const fs = require('fs/promises');
const path = require('path');

const Accessory = require('../models/Accessory');

exports.create = (accessoryData) => Accessory.create(accessoryData);

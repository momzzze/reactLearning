const fs = require('fs/promises');
const cubes = require('../db.json');
const path = require('path');


exports.getOne = (cubeId) => cubes[cubeId];

exports.getAll = (search = '', from = 0, to = 6) => {
    const result = cubes.filter(x => x.name.toLowerCase().includes(search?.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);

    return result;
};

exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });
    let textData = JSON.stringify(cubes, '', 4);
    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' });
};


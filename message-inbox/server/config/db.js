const {
    Sequelize
} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        dialectOptions: {
            // ssl: {
            //     require: true,
            //     rejectUnauthorized: false
            // }
        },
        pool: {
            max: 5,
            min: 0,
            idle: 100000,
        },
        define: {
            timestamps: false
        },
        logging: false
    }
)
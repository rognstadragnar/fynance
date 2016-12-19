import Sequelize from 'sequelize';
import config from '../../config.json';
import User from '../models/Users.js';
// --------- SEQUELIZE
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: "mysql",
    port: config.db.port,
    define: {
        paranoid: true
    }
});


const Account = sequelize.define('accounts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },

    accountnumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { isInt: true, len: [6,6] }
    },
    user_id: {
        type: Sequelize.INTEGER,
        refrences: {model: User, key: 'id'}
    },
    amount: {
        type: Sequelize.BIGINT,
        allowNull: false,
        validate: {min: 0, isInt: true}
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},
{
  freezeTableName: true // Model tableName will be the same as the model name
});

sequelize.sync();


export default Account;

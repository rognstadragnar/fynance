import Sequelize from 'sequelize';
import config from '../../config.json';
import shortid from 'shortid';
// --------- SEQUELIZE
const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: "mysql",
    port: config.db.port,
    define: {
        paranoid: true
    }
});


const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    _id: { type: Sequelize.STRING,
        defaultValue: shortid.generate
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    signUpDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }

}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

sequelize.sync();


export default User;

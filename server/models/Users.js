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


const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    _id: {
        type: Sequelize.STRING,
        defaultValue: shortid.generate,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    fullname: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    postnummer: {
        type: Sequelize.INTEGER(4)
    },
    signUpDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},
    {
        freezeTableName: true // Model tableName will be the same as the model name
    }
);

sequelize.sync();


export default User;

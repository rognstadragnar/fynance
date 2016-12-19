const Router = require('express').Router();
import User from '../models/Users.js';
import Account from '../models/Accounts.js';
import Transaction from '../models/Transactions.js';
import Sequelize from 'sequelize';
import Validator from 'validator';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config.json'

function validateInputFromDB(data, otherValidations) {
    let { errors, isValid } = otherValidations(data);
    console.log(data);

    return User.findAll({
        where: {
            email: data.email
        }
        })
        .then((res) => {
            console.log(res.length > 0);
            if (res.length > 0) {
                errors.username = 'Username or email is already taken..!'
            }
        })
        .then(() => {return { errors, isValid: Object.keys(errors).length === 0}})
    }

Router.post('/api/users', (req, res) => {
    const { errors, isValid } = validateInputFromDB(req.body, validateInput).then(({ errors, isValid}) => {
        if (!isValid) {
            res.status(400).json(errors)
        } else {
            const {
                fullname,
                password,
                email
            } = req.body;
            const password_digest = bcrypt.hashSync(password, 10);
            User.build({ email: email, password: password_digest,
                fullname: fullname
            }).save()
            .then(() => {
                Account.build({ accountnumber: 123456, user_id: 3, amount: 200}).save()
                res.sendStatus(200)
            })
            .catch(Sequelize.ValidationError, (err) => {
                res.status(500).json(err.errors[0].message);
            })
        }
    })
})

Router.get(`/api/users/:identifier`, (req, res) => {
    console.log('hei', req.params.identifier)
    User.findAll({
            where: {
                email: req.params.identifier
            },
            attributes: { exclude: ['password'] }
    }).then((user) => {
        console.log(user.length)
        if (!user.length) {
            res.status(200).json({errors: ''})
        } else {
            res.status(200).json({errors: 'user exists'})
        }
    })
})


Router.post('/api/auth', (req, res) => {
    const { email, password} = req.body;

    User.findOne({
            where: {
                email: email
            }
    }).then((user) => {
        if (user) {
            console.log(user.dataValues);
            if (bcrypt.compareSync(password, user.dataValues.password)){
                const { _id, username } = user.dataValues;
                const token = jwt.sign({
                    _id,
                    email
                }, config.jwt.secret)
                res.json({ token })
            } else {
                res.status(401).json({errors: { form: 'Invalid Credentials' }})
            }
            //return user
        } else {
            res.status(401).json({errors: { form: 'Invalid Credentials' }})
        }
    })
})

Router.get('/*',(req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});


/*
Router.post('/api/users', (req, res) => {
    const { errors, isValid } = validateInputFromDB(req.body, validateInput).then(({ errors, isValid}) => {
        if (!isValid) {
            res.status(400).json(errors)
        } else {
            const { username, password } = req.body;
            const password_digest = bcrypt.hashSync(password, 10);
            User.build({ username: username, password: password_digest})
            .save()
            .then(() => res.sendStatus(200))
            .catch(Sequelize.ValidationError, (err) => {
                res.status(500).json(err.errors[0].message);
            })
        }
    })
})
*/




export default Router;

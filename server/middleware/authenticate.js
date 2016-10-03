import jwt from 'jsonwebtoken';
import config from '../..config.json';
import User from '../models/Users';

export default (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }
    if (token) {
        jwt.verify(token, config.jwt.secret, (err, decoded) => {
            if (err) {
                res.status(403).json({error: 'Failed to authenticate token.'})
            } else {
                User.findOne({
                    where: {_id: decoded._id},
                    attributes: { exclude: ['password'] }
                }).then((user) => {
                    if(!user) {
                        res.status(404).json({error: 'No such user'})
                    } else {
                        req.currentUser = user;
                        next();
                    }
                })
            }
        })
    } else {
        res.status(403).json({error: 'No token provided.'})
    }
}

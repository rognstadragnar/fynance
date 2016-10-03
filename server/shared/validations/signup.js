import Validator from 'validator';

export default function validateInput(data, alreadyExist = false) {
    let errors = {};
    if (Validator.isNull(data.username) || !Validator.isEmail(data.username) || alreadyExist) {
        errors.username = 'Username is invalid or already in use';
    }
    if (Validator.isNull(data.password)) {
        errors.password = 'You need a password';
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

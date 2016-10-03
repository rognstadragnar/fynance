import Validator from 'validator';

export default function validateInput(data) {
    let errors = {};


    if (Validator.isNull(data.username)) {
        errors.username = 'A real username is required';
    }
    if (Validator.isNull(data.password)) {
        errors.password = 'Password is required';
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

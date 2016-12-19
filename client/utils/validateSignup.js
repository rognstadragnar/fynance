import Validator from 'validator';



export default function validateInput(data, alreadyExist = false) {
    let errors = {};

    if (Validator.isNull(data.fullname)) {
        errors.fullname = 'You need a fullname'
    }

    if (Validator.isNull(data.email) || !Validator.isEmail(data.email)) {
        errors.email = 'You need to use an unique email'
    }

    if (Validator.isNull(data.password)) {
        errors.password = 'You need a password AND it must contain';
    }
    if (Validator.isNull(data.confirmPassword) || data.confirmPassword !== data.password) {
        errors.confirmPassword = 'Passwords must match';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

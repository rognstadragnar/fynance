import React from 'react';

const TextfieldGroup = ({labelName, field, name, value, errors, onChange, onBlur}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{labelName}</label>
            <input
                onChange={onChange}
                onBlur={onBlur}
                type={field}
                name={name}
                value={value}
            />
            {errors && <span>{errors}</span>}
        </div>
    )
}


TextfieldGroup.propTypes = {
    labelName: React.PropTypes.string.isRequired,
    field: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    errors: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func
}

TextfieldGroup.defaultProps = {
    field: 'text'
}

export default TextfieldGroup;

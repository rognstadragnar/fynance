import React from 'react';

const TextfieldGroup = ({labelName, labelClass, field, name, value, errors, onChange, onBlur, onFocus}) => {
    return (
        <div className='form-group'>
            <label
                className={labelClass}
                htmlFor={name}>
                {labelName}
            </label>
            <input
                onFocus={onFocus}
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
    labelClass: React.PropTypes.string,
    field: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    errors: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
}

TextfieldGroup.defaultProps = {
    field: 'text'
}

export default TextfieldGroup;

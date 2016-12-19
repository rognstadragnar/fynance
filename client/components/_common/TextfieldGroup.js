import React from 'react';

const TextfieldGroup = ({labelName, labelClass, field, name, value, errors, onChange, onBlur, onFocus, icon}) => {
    const hasIcon = icon ? ' hasIcon' : '';
    return (
        <div className={'form-group' + hasIcon + ' '+ labelClass}>
            { icon ? <img src={icon}></img> : null }
            <label
                className={labelClass}
                htmlFor={name}>
                {labelName}
            </label>
            <input
                className={labelClass}
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
    onFocus: React.PropTypes.func,
    icon: React.PropTypes.string
}

TextfieldGroup.defaultProps = {
    field: 'text'
}

export default TextfieldGroup;

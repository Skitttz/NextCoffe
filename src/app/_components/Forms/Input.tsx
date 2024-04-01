import React from 'react';
import Error from '../Helper/Error';

const Input = ({
  label,
  type,
  name,
  value,
  setValue,
  onChange,
  error,
  onBlur,
  placeholder,
  width,
  height,
  backgroundImage,
  backgroundPosition,
  customStyleDiv,
  customStyleInput,
  labelStyle,
}) => {
  const inputStyle = {
    height: height || 'auto', // Se a altura não for fornecida, use "auto"
    width: width || '',
    backgroundImage: backgroundImage || 'Inherited',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: backgroundPosition || 'initial',
  };
  return (
    <div className={`${customStyleDiv}`}>
      {label ? (
        <label htmlFor="" className={`${labelStyle}`}>
          {label}
        </label>
      ) : (
        ''
      )}

      <input
        className={`${customStyleInput}`}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder ? placeholder : ''}
        style={inputStyle}
      />
      {error && <Error error={error} />}
    </div>
  );
};

export default Input;

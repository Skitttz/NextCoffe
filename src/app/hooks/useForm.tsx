import { useState } from 'react';

type TypesObject = {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
};

const types: TypesObject = {
  username: {
    regex: /^(?=.{3,12}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/,
    message: 'Sem @#$%!?* | Mínimo 3 caracteres',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido.',
  },
  password: {
    regex: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{6,20})/,
    message: '',
  },
  phone: {
    regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/,
    message: 'Preencha um numero válido.',
  },
};

type ValidationType = 'username' | 'email' | 'password' | undefined;

const useForm = (type: ValidationType) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  function validate(value: string) {
    if (type === undefined) return true;
    if (value.length === 0) {
      setError('Não deixe este campo em branco.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

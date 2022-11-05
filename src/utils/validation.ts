const validationHelper = {
  login: {
    pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
  },
  email: {
    pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  },
  repeat_password: {
    pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  },
  firstName: {
    pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
  },
  lastName: {
    pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
  },
  phone: {
    pattern: /^[+-d]?\d{10,15}$/,
  },
  message: {
    pattern: /^(?!\s*$).+/,
  },
};

export const validateInput = (str: string, name: keyof typeof validationHelper) => {
  const {
    pattern,
  } = validationHelper[name];

  return pattern.test(str);
};

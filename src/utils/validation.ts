const validationHelper = {
  login: {
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^\S*$||(?!^\d+$)^.+$/gi,
  },
  password: {
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^\S*$||(?!^\d+$)^.+$/gi,
  },
};

export const validateInput = (str: string, name: keyof typeof validationHelper) => {
  const {
    minLength, maxLength, required, pattern,
  } = validationHelper[name];

  const isValidLength = (str || '').length > minLength && (str || '').length < maxLength;
  const isValidByPattern = pattern.test(str);
  return [isValidByPattern, isValidLength].every((it) => it);
};

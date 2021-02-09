export const toSnakeCase = (text: string) => {
  const re = text
    .toLowerCase()
    .split('')
    .map((letter) => {
      return letter === ' ' ? '-' : letter;
    });
  return re.join('');
};

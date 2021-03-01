export const capitalizeFirstWord = (word: string) => {
  let text = word.toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
};

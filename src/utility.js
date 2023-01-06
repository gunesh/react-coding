export const stringWithoutQuotes = () => {
  let dummyString = 'Hello Javascript- "This language" is very popular."';
  let finalString = '';
  for (let i = 0; i < dummyString.length; i++) {
    if (dummyString.charAt(i) != '"') {
      finalString += dummyString.charAt(i);
    }
  }
  console.log('string without quotes: ' + finalString);
};

export const countGivenChar = (str = '', ch = ' ') => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el !== ch) {
      continue;
    }
    count++;
  }
  return count;
};

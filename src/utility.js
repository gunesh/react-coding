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

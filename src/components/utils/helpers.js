// Iterate over a passed object and return an array of the keys
export const getKeys = (obj) => {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
};

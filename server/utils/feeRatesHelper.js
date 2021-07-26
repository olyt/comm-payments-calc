const getAllByName = (arr, withNames) => {
  const names = [...new Set(arr.map((rate) => rate.name))];
  const result = {};

  names.forEach((name) => {
    if (name) {
      result[name] = arr.filter((rate) => rate.name === name);
    }
  });

  return withNames ? { names, rates: result } : result;
};

module.exports = {
  getSortedRates: (collection) => {
    return getAllByName(collection);
  },
  getCurrentRates: (collection) => {
    const { names, rates } = getAllByName(collection, true);

    names.forEach((name) => {
      rates[name] = rates[name].find((rate) => rate.current);
    });

    return rates;
  },
};

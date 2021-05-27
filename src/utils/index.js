export const createFilter = (filterType) => {
  return (data, filters) => {
    const newData = [];
    data.forEach(obj => {
      filters.forEach(filter => {
        if (obj[filterType].toLowerCase() === filter.toLowerCase()) newData.push(obj);
      });
    });
    return newData;
  }
}

export const filterByRange = (range, data, prop) => {
  const [min, max] = range;
  return data.filter(item => (
    (item[prop] >= min) && (item[prop] <= max)
  ));
}

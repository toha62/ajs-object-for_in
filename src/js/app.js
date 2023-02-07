function sortObjProps(obj, order = []) {
  const propertiesList = [];

  for (const property in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (!obj.hasOwnProperty(property)) {
      continue;
    }
    if (!order.includes(property)) {
      propertiesList.push(property);
    }
  }
  return [...order, ...propertiesList.sort()].map((item) => ({ key: item, value: obj[item] }));
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

console.log(sortObjProps(obj, ['name', 'level']));
console.log(sortObjProps(obj, ['level']));
console.log(sortObjProps(obj));

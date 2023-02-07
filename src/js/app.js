export default function sortObjProps(obj, order = []) {
  const propertiesList = [];

  for (const property in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      if (!order.includes(property)) {
        propertiesList.push(property);
      }
    }
  }
  return [...order, ...propertiesList.sort()].map((item) => ({ key: item, value: obj[item] }));
}

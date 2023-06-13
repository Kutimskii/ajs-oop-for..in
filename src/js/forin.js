export default function sortObj(object, arr) {
  const copyObj = { ...object };
  const temp = [];
  const result = [];
  arr.forEach((el) => {
    result.push({ key: el, value: object[el] });
    delete copyObj[el];
  });

  for (const key in copyObj) {
    if (Object.getOwnPropertyDescriptor(copyObj, key)) {
      temp.push({ key, value: copyObj[key] });
    }
  }
  temp.sort((a, b) => (a.key > b.key ? 1 : -1));

  return result.concat(temp);
}

export default function sortObj(object, arr) {
  const copyObj = { ...object };
  const temp = [];
  const result = [];
  arr.forEach((el) => {
    result.push({ key: el, value: object[el] });
    delete copyObj[el];
  });

  for (const [key, value] of Object.entries(copyObj)) {
    temp.push({ key, value });
  }
  temp.sort((a, b) => (a.key > b.key ? 1 : -1));

  return result.concat(temp);
}

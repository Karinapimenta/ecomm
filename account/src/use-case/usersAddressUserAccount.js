export function checkingSP(array) {
  const n = [];
  let i = 0;
  array.forEach((element) => {
    if (element.endereco.uf.includes("SP")) {
      n[i] = element.name;
      i++;
    }
  });
  return n;
}

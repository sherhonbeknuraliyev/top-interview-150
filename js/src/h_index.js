function hIndex(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;

  for (let i = 0; i < citations.length; i++) {
    console.log("citations[i]", citations[i], "i+1", i + 1);
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
    console.log("h", h);
  }

  return h;
}

module.exports = hIndex;

console.log(hIndex([1, 3, 1]));

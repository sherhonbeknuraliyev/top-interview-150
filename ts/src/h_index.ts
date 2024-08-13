function hIndex(citations: number[]) {
  let h = 0;
  citations.sort((a: number, b: number) => b - a);

  for (let i: number = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
}

export default hIndex;

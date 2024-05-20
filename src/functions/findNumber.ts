const finder = (value: string, arr = []) => {
  if (value) {
    for (let i = 0; i < value.length + 1; i++) {
      if (Number(value.slice(0, i))) {
        arr.push(value.slice(0, i));
      }
    }
  }

  if (value.slice(1).length > 0) {
    finder(value.slice(1), arr);
  }

  return arr;
};

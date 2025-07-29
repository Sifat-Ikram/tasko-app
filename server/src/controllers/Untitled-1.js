// const x = level;

const isPalisdrome = (x) => {
  for (let index = 0; index < x.length / 2; index++) {
    if (x[index] !== x[x.length - 1 - index]) {
      return false;
    }
  }

  return true;
};

console.log(isPalisdrome("level"));

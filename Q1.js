function question1() {
  const arr = [1, 23, 67, 53, 42];
  let max = 0;
  let secondMax = 0;
  arr.forEach((item) => {
    if (item > max) {
      secondMax = max;
      max = item;
    } else if (item > secondMax) {
      secondMax = item;
    }
  });

  console.log(secondMax);
  return secondMax;
}

question1();

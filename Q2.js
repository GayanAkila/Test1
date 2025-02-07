function question2() {
  const treeNodes = [
    [31, 23, 45],
    [23, 41, 90],
  ];
  let max = 0;
  let secondMax = 0;

  treeNodes.forEach((items) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i] > max) {
        secondMax = max;
        max = items[i];
      } else if (items[i] > secondMax) {
        secondMax = items[i];
      }
    }

    console.log(secondMax);
  });

  return secondMax;
}

question2();

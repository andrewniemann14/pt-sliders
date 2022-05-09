export function solveForOne(a, target) {
  let bestMatch;
  let lowestSoFar = 101;

  for (let i = 0; i < a.length; i++) {
    if (a[i] >= target && a[i] <= lowestSoFar) {
      lowestSoFar = a[i];
      bestMatch = i;
    }
  }
  return bestMatch;
}

export function solveForTwo(a1, a2, target) {
  let bestMatch = [];
  let lowestSoFar = 101;
  // let overShot;
  let smallestGap = 101;

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      let sum = a1[i] + a2[j];
      let excess = sum - target;
      let diff = Math.abs(a1[i] - a2[j]);

      if (
        sum >= target &&
        diff < excess &&
        sum <= lowestSoFar &&
        diff <= smallestGap
      ) {
        console.log("difference between two point values: ", diff);
        console.log("excess of value over threshold: ", excess);
        lowestSoFar = sum;
        smallestGap = diff;
        // overShot = sum - target;
        bestMatch = [i, j];
      }
    }
  }
  return bestMatch;
}

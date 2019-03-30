function F(n) {
  const numbers = [0, 1];

  for (let i = 2; i <= n; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }

  return numbers[n];
}

module.exports = F;

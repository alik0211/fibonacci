function F(n) {
  if (n < 2) {
    return n;
  }

  return F(n - 1) + F(n - 2);
}

module.exports = F;

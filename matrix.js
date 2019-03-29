function copy(lhs, rhs) {
  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
      rhs[i][j] = lhs[i][j];
    }
  }
}

function mul(lhs, rhs) {
  const res = [[0, 0], [0, 0]];

  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
      for (let k = 0; k < 2; ++k) {
        res[i][j] += lhs[i][k] * rhs[k][j];
      }
    }
  }

  copy(res, rhs);
}

function pow(mx, n) {
  const res = [[1, 0], [0, 1]];

  while (n) {
    if (n & 1) {
      mul(mx, res);
    }

    mul(mx, mx);
    n >>= 1;
  }

  copy(res, mx);
}

function F(n) {
  const base = [[0, 1], [1, 1]];

  pow(base, n);

  return base[0][1];
}

module.exports = F;

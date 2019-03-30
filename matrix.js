function BinMatrix(a, b) {
  this.matrix = [a, b];

  return this;
}

BinMatrix.prototype.pow = function(n) {
  const res = [[1, 0], [0, 1]];

  while (n) {
    if (n & 1) {
      this.mul(res);
    }

    this.mul(this.matrix);
    n >>= 1;
  }

  this.copy(res, this.matrix);
};

BinMatrix.prototype.mul = function(rhs) {
  const res = [[0, 0], [0, 0]];

  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
      for (let k = 0; k < 2; ++k) {
        res[i][j] += this.matrix[i][k] * rhs[k][j];
      }
    }
  }

  this.copy(res, rhs);
};

BinMatrix.prototype.copy = function(lhs, rhs) {
  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
      rhs[i][j] = lhs[i][j];
    }
  }
};

function F(n) {
  const matrixInstance = new BinMatrix([0, 1], [1, 1]);

  matrixInstance.pow(n);

  return matrixInstance.matrix[0][1];
}

module.exports = F;

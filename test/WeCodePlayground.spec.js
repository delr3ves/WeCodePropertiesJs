const sum = (a, b) => {
  return a + b;
};

describe("WeCodeProperties", () => {
  jsc.property(
    "keep the associative property",
    jsc.integer,
    jsc.integer,
    jsc.integer,
    (a, b, c) => {
      return sum(sum(a, b), c) == sum(a, sum(b, c));
    }
  );

  jsc.property(
    "keep the commutative property",
    jsc.integer,
    jsc.integer,
    (a, b) => {
      return sum(a, b) == sum(b, a);
    }
  );

  jsc.property("have an identity value", jsc.integer, a => {
    return sum(a, 0) == a;
  });

  const actualSumScenarios = [
    [1, 4, 5],
    [4, 5, 9],
    [0, 0, 0],
    [-1, -5, -6],
    [1, -5, -4],
    [-5, 1, -4]
  ];

  actualSumScenarios.forEach(([a, b, expected]) => {
    it(`actually sum a couple numbers ${a} + ${b} should be ${expected}`, () => {
      expect(sum(a, b)).to.equal(expected);
    });
  });
});

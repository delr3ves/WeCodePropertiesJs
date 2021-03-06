const fibonacci = num => {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
};

describe("Fibonacci of n", () => {
  jsc.property(
    "keep the most important property",
    jsc.nat,
    a => fibonacci(a) + fibonacci(a + 1) === fibonacci(a + 2)
  );
});

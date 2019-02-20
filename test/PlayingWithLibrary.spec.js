describe("Playing with the library", () => {
  jsc.property(
    "add logs to know how it executes",
    jsc.string,
    jsc.integer,
    (literal, numeric) => {
      logger.log(`Received: \nstring: [${literal}] \nnumber: [${numeric}]`);
      return typeof literal === "string" && typeof numeric == "number";
    }
  );

  it("allow us to modify the number of executions", () => {
    let numberOfExecutions = 0;
    let expectedExecutions = 30;
    let options = {
      tests: expectedExecutions
    };
    jsc.check(
      jsc.forall(jsc.integer, a => {
        numberOfExecutions += 1;
        return a === a;
      }),
      options
    );
    expect(numberOfExecutions).to.be.equal(expectedExecutions);
  });

  it("make a test fail in order to see how shrink works", () => {
    //When you make the test fail, you can see how the logs on how the shrink works. You can also add log traces in order to understand what the library is doing. I saw how to capture a property error here: https://github.com/jsverify/jsverify#properties
    let result = jsc.checkForall(jsc.integer, jsc.integer, (a, b) => {
      logger.log(`Received: [${a}, ${b}]`);
      return a >= 3 && b <= 5;
    });
    expect(result).to.not.be.true;
  });

  it("use always the same values when we provide a seed", () => {
    let allData = [];
    const expected = [-14, 5, -22, -21, 1, 30, -14, 18, 0, -9];
    let options = {
      tests: 10,
      rngState: "0ee5c16b3f478a2d90"
    };
    jsc.check(
      jsc.forall(jsc.integer, a => {
        allData[allData.length] = a;
        return true;
      }),
      options
    );
    expect(allData).to.be.eql(expected);
  });

  const restrictiveGenerator = (min, max) => {
    return jsc.integer.smap(generated => {
      const i = Math.abs(generated) % (max - min);
      return i + min;
    });
  };

  jsc.property(
    "pass when a generator is limited but not restrictive",
    restrictiveGenerator(10, 15),
    a => {
      return a >= 10 && a < 15;
    }
  );
});

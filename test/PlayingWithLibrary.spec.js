describe("Playing with the library", () => {
  jsc.property("add logs to know how it executes", () => {
    //write test the whatever property about the sum but add logs to know the value of the received numbers.ç
    // As jslint will mark console.log calls as an error, you can use logger.log() to add traces. It's defined in bootstrap.js
    return true;
  });

  jsc.property("allow us to modify the number of executions", () => {
    //write a test in order to ensure the the number of executions
    // Here, you'll find how to change the number of success executions: https://stackoverflow.com/a/38706052
    return true;
  });

  it("make a test fail in order to see how shrink works", () => {
    //When you make the test fail, you can see how the logs on how the shrink works. You can also add log traces in order to understand what the library is doing. I saw how to capture a property error here: https://github.com/jsverify/jsverify#properties
    let result = jsc.checkForall(jsc.integer, a => {
      return a != a;
    });
    expect(result).to.not.be.true;
  });

  it("use always the same values when we provide a seed", () => {
    //Tip: You can capture the error the same way the previous test :)
  });

  jsc.property("pass when a generator is limited but not restrictive", () => {
    //write a custom generator that only generate a very limited range of values.
    //Tip: You can use an already defined generator or just implement yours. I'll do mine :).
    return true;
  });
});

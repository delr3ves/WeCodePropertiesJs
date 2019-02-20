describe("Collections", () => {
  jsc.property("contain one more element after insertion", () => true);
  jsc.property("contain the inserted element", () => true);
  jsc.property("have an element less after deletion", () => true);
  jsc.property("not contain the removed element", () => true);
  jsc.property(
    "contain the items of the two collections after a concatenation",
    () => true
  );
  jsc.property("no duplicated elements when convert to a set", () => true);
});

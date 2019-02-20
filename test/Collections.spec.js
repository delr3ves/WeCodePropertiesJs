Array.prototype.countItemInList = function(item) {
  return this.filter(element => item === element).length;
};

Array.prototype.removeAllOccurrencesOfAnItem = function(item) {
  return this.filter(element => item != element);
};

Array.prototype.containAllItemsOf = function(needle) {
  const self = this;
  return needle.every(item => self.indexOf(item) > -1);
};

Array.prototype.clone = function() {
  return this.map(item => item);
};

Array.prototype.unique = function() {
  return this.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

describe("Collections", () => {
  jsc.property(
    "contain one more element after insertion",
    jsc.array(jsc.nat),
    jsc.nat,
    (list, item) => {
      const previousLength = list.length;
      list.push(item);
      return list.length === previousLength + 1;
    }
  );

  jsc.property(
    "contain the inserted element",
    jsc.array(jsc.nat),
    jsc.nat,
    (list, item) => {
      list.push(item);
      return list.indexOf(item) > -1;
    }
  );

  jsc.property(
    "have an element less after deletion",
    jsc.array(jsc.nat),
    jsc.nat,
    (list, item) => {
      const numberOfItems = list.countItemInList(item);
      let expectedSize = list.length - numberOfItems;
      list.push(item);
      const listWithNoItem = list.removeAllOccurrencesOfAnItem(item);

      return listWithNoItem.length === expectedSize;
    }
  );

  jsc.property(
    "not contain the removed element",
    jsc.array(jsc.nat),
    jsc.nat,
    (list, item) => {
      list.push(item);
      const listWithNoItem = list.removeAllOccurrencesOfAnItem(item);

      return listWithNoItem.indexOf(item) === -1;
    }
  );

  jsc.property(
    "contain the items of the two collections after a concatenation",
    jsc.array(jsc.string),
    jsc.array(jsc.string),
    (list1, list2) => {
      const listWithAllItems = list1.clone().concat(list2);

      return (
        listWithAllItems.containAllItemsOf(list1) &&
        listWithAllItems.containAllItemsOf(list2)
      );
    }
  );

  jsc.property(
    "no duplicated elements when convert to a set",
    jsc.array(jsc.string),
    list => {
      const asSet = new Set(list);
      const asArray = Array.from(asSet);

      let unique = list.unique();
      return (
        unique.containAllItemsOf(asArray) && asArray.containAllItemsOf(unique)
      );
    }
  );
});

let myObj = {
  foo: 1,
  bar: 2,
  qux: 3
};

/*Both iterate over the  keys of myObj, but snippet
1 only iterates over myObj's own properties, and snippet 2 over all of the objects key's, including from myProtoObj.*/
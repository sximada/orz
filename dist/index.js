"use strict";

require("core-js/modules/es.array.reverse");

require("core-js/modules/web.dom-collections.iterator");

const curry = f => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.length >= f.length ? f(...args) : curry(f.bind(f, ...args));
};

const compose = (f, g) => x => f(g(x));

const composeN = function composeN() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return fns.reverse().reduce((x, f) => f.apply(f, [].concat(x)), args);
  };
};
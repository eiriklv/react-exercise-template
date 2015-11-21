/**
 * Enable / disable hints
 */
global.hints = true;

/**
 * Dependencies
 */
const React = require('react');
const jsxToString = require('react-element-to-jsx-string');
const collapse = require('collapse-white-space');
const ansidiff = require('ansidiff');

/**
 * Rewrite the Error constructor
 * to disable stack traces
 */
Error = function(message) {
  this.message = message;
  this.stack = null;
}

/**
 * Override console.warn
 * to throw
 */
let warn = console.warn;
console.warn = function (warning) {
  throw new Error(warning);
  warn.apply(console, arguments);
};

/**
 * Override console.error
 * to throw
 */
let err = console.err;
console.error = function (warning) {
  throw new Error(warning);
  err.apply(console, arguments);
};

/**
 * React component stub
 * (global for easy access)
 */
global.reactStub = React.createClass({
  displayName: 'StubClass',
  render() {
    return null;
  }
});

/**
 * Assert function
 */
function assert(actual, expected, message) {
  if (!(actual == expected)) {
    throw new Error(message);
  }
}

/**
 * Assert equal function
 */
assert.equal = function(actual, expected, message) {
  return global.hints ?
    assert(
      actual,
      expected,
      (message || 'Expected result:') + '\n' + expected + '\n' + 'But result was:' + '\n' + actual
    ) :
    assert(
      actual,
      expected,
      message || 'Unexpected results:'
    )
}

/**
 * Extend assert module
 * to be able to work with JSX
 * (includes)
 */
assert.includesJSX = function(actual, shouldBeIncluded, message) {
  let actualString = jsxToString(actual);
  let shouldBeIncludedString = jsxToString(shouldBeIncluded);

  if (!~(collapse(jsxToString(actualString)).indexOf(collapse(shouldBeIncludedString)))) {
    let error = new Error(global.hints ? (message || (actualString + '\n' + 'should include' + '\n' + shouldBeIncludedString + '\n')) : message);
    error.stack = null;
    throw error;
  }
}

/**
 * Extend assert module
 * to be able to work with JSX
 * (equals)
 */
assert.equalJSX = function(actual, expected, message) {
  var actualString = jsxToString(actual);
  var expectedString = jsxToString(expected);

  assert(
    collapse(actualString),
    collapse(expectedString),
    global.hints ?
      (message || 'Expected result (diff):') + '\n' + ansidiff.chars(expectedString, actualString) :
      message
  );
}

/**
 * Add assert to global scope for
 * extension and easier access
 */
global.assert = assert;

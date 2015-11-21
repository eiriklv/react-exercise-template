const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  createRenderer
} = require('react-addons-test-utils');

describe('Exercise 2 - My first component with classes', () => {
  it('Should have correct output with css class attribute', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponentWithClasses
    } = require('../../src/chapter-1/Exercise-2.jsx');

    renderer.render(
      <MyFirstComponentWithClasses />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div className="awesome">
        Hello World!
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});

const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  createRenderer
} = require('react-addons-test-utils');

describe('Exercise 1 - My first component', () => {
  it('Should have correct output', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponent
    } = require(`../../src/${__version__}/chapter-1/Exercise-1.jsx`);

    renderer.render(
      <MyFirstComponent />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        Hello World!
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});

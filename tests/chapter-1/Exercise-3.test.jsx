const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  createRenderer
} = require('react-addons-test-utils');

describe('Exercise 3 - My first component with props', () => {
  it('Should have correct output using props as input (case 1)', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponentWithProps
    } = require(`../../src/${__version__}/chapter-1/Exercise-3.jsx`);

    renderer.render(
      <MyFirstComponentWithProps
        name={'Eirik'}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div className="awesome">
        Hi, my name is Eirik!
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 2)', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponentWithProps
    } = require(`../../src/${__version__}/chapter-1/Exercise-3.jsx`);

    renderer.render(
      <MyFirstComponentWithProps
        name={'Lise'}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div className="awesome">
        Hi, my name is Lise!
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 3)', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponentWithProps
    } = require(`../../src/${__version__}/chapter-1/Exercise-3.jsx`);

    renderer.render(
      <MyFirstComponentWithProps
        name={'Anna'}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div className="awesome">
        Hi, my name is Anna!
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});

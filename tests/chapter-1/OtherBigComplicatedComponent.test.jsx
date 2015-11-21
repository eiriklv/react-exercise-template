const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  renderIntoDocument,
  createRenderer
} = require('react-addons-test-utils');

describe('OtherBigComplicatedComponent', () => {
  it('outputs what it should (dom)', () => {
    const OtherBigComplicatedComponent = require('../../src/chapter-1/OtherBigComplicatedComponent.jsx');

    // Render a checkbox with label in the document
    const component = renderIntoDocument(
      <OtherBigComplicatedComponent />
    );

    assert.equal(
      findDOMNode(component).textContent,
      '14'
    );
  });

  it('outputs what it should (shallow)', () => {
    const OtherBigComplicatedComponent = require('../../src/chapter-1/OtherBigComplicatedComponent.jsx');

    let renderer = createRenderer();
    renderer.render(<OtherBigComplicatedComponent />);

    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div className="OtherBigComplicatedComponent">14</div>;

    assert.equalJSX(
      actualElement,
      expectedElement
    );

    assert.includesJSX(
      actualElement,
      '14'
    );
  });
});

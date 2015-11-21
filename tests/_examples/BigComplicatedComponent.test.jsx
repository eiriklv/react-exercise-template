const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  renderIntoDocument,
  createRenderer
} = require('react-addons-test-utils');

describe('BigComplicatedComponent', () => {
  it('outputs what it should', () => {
    const BigComplicatedComponent = require('../../src/chapter-1/BigComplicatedComponent.jsx');

    // Render a checkbox with label in the document
    const component = renderIntoDocument(
      <BigComplicatedComponent />
    );

    assert.equal(
      findDOMNode(component).textContent,
      '42',
      global.hints ? null : 'Value was wrong'
    );
  });
});

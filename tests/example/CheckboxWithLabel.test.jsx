const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} = require('react-addons-test-utils');

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    /**
     * Here we're creating an injector that can mock specific parts
     * of the CheckboxWithLabel components
     *
     * check out [inject-loader](https://www.npmjs.com/package/inject-loader) for more info
     */
    const Injector = require(`inject!../../src/chapter-1/CheckboxWithLabel.jsx`);

    /**
     * Here we're creating the actual mocked component class
     */
    const CheckboxWithLabel = Injector({
      './BigComplicatedComponent.jsx': reactStub,
      './OtherBigComplicatedComponent.jsx': reactStub,
    });

    // Render a checkbox with label in the document
    const checkbox = renderIntoDocument(
      <CheckboxWithLabel
        labelOn="On"
        labelOff="Off"
      />
    );

    // Verify that it's Off by default
    const label = findRenderedDOMComponentWithTag(
      checkbox,
      'label'
    );

    assert.equal(
      findDOMNode(label).textContent,
      'Off',
      global.hints ? null : 'Did not have correct initial label'
    );

    // Simulate a click and verify that it is now On
    const input = findRenderedDOMComponentWithTag(checkbox, 'input');
    Simulate.change(input);

    assert.equal(
      findDOMNode(label).textContent,
      'On',
      global.hints ? null : 'Did not have correct label after click'
    );
  });
});

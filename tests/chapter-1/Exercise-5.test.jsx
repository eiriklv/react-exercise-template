const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} = require('react-addons-test-utils');

describe('Exercise 5 - My first component with state and event handling', () => {
  it('changes the output text after one click', () => {
    const {
      CheckboxWithLabel
    } = require('../../src/chapter-1/Exercise-5.jsx');

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
      'Did not have correct initial label'
    );

    // Simulate a click and verify that it is now On
    const input = findRenderedDOMComponentWithTag(checkbox, 'input');
    Simulate.change(input);

    assert.equal(
      findDOMNode(label).textContent,
      'On',
      'Did not have correct label after click'
    );
  });

  it('changes the output text after two clicks', () => {
    const {
      CheckboxWithLabel
    } = require('../../src/chapter-1/Exercise-5.jsx');

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
      'Did not have correct initial label'
    );

    // Simulate a click and verify that it is now On
    const input = findRenderedDOMComponentWithTag(checkbox, 'input');
    Simulate.change(input);
    Simulate.change(input);

    assert.equal(
      findDOMNode(label).textContent,
      'Off',
      'Did not have correct label after two clicks'
    );
  });
});

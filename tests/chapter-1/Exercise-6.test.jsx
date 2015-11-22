const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} = require('react-addons-test-utils');

describe('Exercise 6 - My first component with PropTypes', () => {
  it('should have correct PropTypes assigned', () => {
    const {
      MyFirstComponentWithPropTypes
    } = require(`../../src/${__version__}/chapter-1/Exercise-6.jsx`);

    // collect the errors that SHOULD happen (caused by PropTypes)
    let correctErrors = [];

    // collect the corresponding errors of not having correct PropTypes
    let errors = []

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypes
          isActive={5}
          count={5}
        />
      );
    } catch (e) {
      correctErrors[0] = e;
    } finally {
      if (!correctErrors[0]) {
        errors.push('isActive should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypes
          isActive={true}
          count={'thing'}
        />
      );
    } catch (e) {
      correctErrors[1] = e;
    } finally {
      if (!correctErrors[1]) {
        errors.push('count should have correct PropType assigned');
      }
    }

    // collect errors and throw
    if (errors.length) {
      throw new Error(errors.join('\n'));
    }

  });
});

const React = require('react');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 */

let REPLACE_ME_ = React.createClass({ render() { return <div />; } });
let REPLACE_ME = '...';

/**
 * HINT
 * If you get stuck, you can go into '/tests/utils.js' and set 'global.hints = true'.
 * That way the error message will be more specific.
 * However, give it a try before you do this,
 * as in most cases this will give you the answer flat out.
 */





/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * Exercise description:
 *
 *
 *
 */

const MyFirstComponentWithPropTypes = React.createClass({
  propTypes: {
    isActive: React.PropTypes.bool,
    count: React.PropTypes.number
  },

  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>

        {this.props.isActive ? (
          <span>Active</span>
        ) : (
          <span>Inactive</span>
        )}
      </div>
    );
  }
});









/**
 * Exports
 */
module.exports = {
  MyFirstComponentWithPropTypes
};

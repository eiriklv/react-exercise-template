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

const CheckboxWithLabel = React.createClass({
  getInitialState() {
    return {
      isChecked: false
    };
  },

  render() {
    return (
      <label className="CheckboxWithLabel">
        <input
          type="checkbox"
          checked={this.state.isChecked}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
});









/**
 * Exports
 */
module.exports = {
  CheckboxWithLabel
};

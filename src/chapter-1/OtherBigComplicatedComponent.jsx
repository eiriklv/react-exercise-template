// This "complicated" module shouldn't be transitively included in tests --
// it should be replaced with a stub. See tests/CheckboxWithLabel.test.jsx.

const React = require('react');

const OtherBigComplicatedComponent = React.createClass({
  propTypes: {
    numb: React.PropTypes.number
  },

  render() {
    return (
      <div className="OtherBigComplicatedComponent">
        14
      </div>
    );
  }
});

module.exports = OtherBigComplicatedComponent;

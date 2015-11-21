require('../../styles/app.css');

const React = require('react');

const { MyFirstComponent } = require('./Exercise-1.jsx');
const { MyFirstComponentWithClasses } = require('./Exercise-2.jsx');
const { MyFirstComponentWithProps } = require('./Exercise-3.jsx');
const { CheckboxWithLabel } = require('./Exercise-4.jsx');
const { CheckboxWithLabel: CheckboxWithLabelThatChanges } = require('./Exercise-5.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-1-exercise-1">
          <h3>Exercise 1: My first component</h3>

          <MyFirstComponent/>
        </div>

        <div className="chapter-1-exercise-2">
          <h3>Exercise 2: My first component with CSS classes</h3>

          <MyFirstComponentWithClasses />
        </div>

        <div className="chapter-1-exercise-3">
          <h3>Exercise 3: My first component with props</h3>

          <MyFirstComponentWithProps
            name={'Hank Moody'}
          />

          <MyFirstComponentWithProps
            name={'Charlie Runkle'}
          />

          <MyFirstComponentWithProps
            name={'Trixie'}
          />
        </div>

        <div className="chapter-1-exercise-4">
          <h3>Exercise 4: My first component with state</h3>

          <CheckboxWithLabel
            labelOn="On"
            labelOff="Off"
          />
        </div>

        <div className="chapter-1-exercise-5">
          <h3>Exercise 5: My first component state and click handling</h3>

          <CheckboxWithLabelThatChanges
            labelOn="Av"
            labelOff="På"
          />
        </div>
      </div>
    );
  }
});

module.exports = App;

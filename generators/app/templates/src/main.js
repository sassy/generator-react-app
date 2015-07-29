var React = require("react");

var Component = React.createClass({
  render() {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
});

React.render(
  <Component />,
  document.getElementById("content")
);

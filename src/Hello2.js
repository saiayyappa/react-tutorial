import React from "react";
/**
 * Class component has been used to modify the state
 */
class Hello2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Potter"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        Using Class component
        <br />
        <input value={this.state.name} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Hello2;

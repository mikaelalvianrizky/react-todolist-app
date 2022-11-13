import React from 'react';
import Button from './Button';

import '../style/Form.css';

class Form extends React.Component {
  state = {
    text: ""
  }

  change = e => {
    this.setState({ text: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.add(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <form className="Form" onSubmit={this.submit}>
        <input type="text" onChange={this.change} className="Form-Input" placeholder="Add Task" value={this.state.text}/>
        <Button text="Add" variant="primary" action={this.submit} />
      </form>
    )
  }
}

export default Form;
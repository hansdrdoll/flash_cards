import React, { Component } from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
// import { Link } from "react-router-dom";

// thanks eric and ryan
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  // update form state
  handleChange(name, e) {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Segment textAlign="center">
          <Form onSubmit={this.handleSubmit}>
            <div>
              <Input
                placeholder="username"
                onChange={(e) => this.handleChange('username', e)}
                value={this.state.username}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="password"
                onChange={(e) => this.handleChange('password', e)}
                value={this.state.password}
              />
            </div>
            <div>
              <Button type="Submit">Submit</Button>
            </div>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default UserForm;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';
import UserForm from '../UserForm';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.submit(data);
  }

  render() {
    // take note how the onSubmit method is passed down to the UserForm
    // as a prop
    return (
      <div>
        <Link to="/register"><Button size="tiny">Create account</Button></Link>
        <Header as='h2'>Login</Header>
        <UserForm submit={this.onSubmit} />
      </div>
    )
  }
}

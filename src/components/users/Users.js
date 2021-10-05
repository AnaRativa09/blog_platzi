import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Table from './Table';

class Users extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }

    return (
      <Table users={this.props.users} />
    );
  };

  render() {
    return <>{this.putContent()}</>;
  }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Users);

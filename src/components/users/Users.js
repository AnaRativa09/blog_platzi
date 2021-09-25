import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

import Spinner from '../general/Spinner';

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Website
            </th>
          </tr>
        </thead>
        <tbody>
          {this.putRows()}
        </tbody>
      </table>
    );
  };

  putRows = () => this.props.users.map((user) => (
    <tr key={user.id}>
      <td>
        {user.name}
      </td>
      <td>
        {user.email}
      </td>
      <td>
        {user.website}
      </td>
    </tr>
  ));

  render() {
    return (
      <div>
        {this.putContent()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Users);

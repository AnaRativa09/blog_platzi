import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount() {
    // const responseData = await axios.get('https://jsonplaceholder.typicode.com/users')
    // this.setState({
    //   users: responseData.data
    // })
    this.props.getAll();
  }

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
    console.log(this.props);
    return (
      <div>
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
      </div>
    )
  }
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
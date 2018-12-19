import AddUserCard from './addUserCard';

import UserList from './list';

import * as React from 'react';

import {IUserInfo} from './models';


class App extends React.Component {
  public state = {
    users : [
      {id: 1, firstName: 'lemon',lastName: 'John',age:10,occupation:'HAHAHAHHAH'},
      {id: 2, firstName: 'orange',lastName: 'John',age:12,occupation:'BOBOBOBOBO'},
      {id: 3, firstName: 'apple',lastName: 'John',age:13,occupation:'DUDUDUDUDUDU'},
  ]
  }
  public addUser = (user:IUserInfo) =>{
    user.id = this.state.users.length ;
    let users = [];
    users = [...this.state.users,user];
    this.setState({
      users
    })
    
  }
  public render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome </p>
        <AddUserCard addUser={this.addUser}/>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;

import * as React from "react";
import { connect } from "react-redux";
import { IRootState } from "./models";

interface IUserListProps {
    users: Array<{
      id: string,
      name: string
    }>
  }
  
  const PureUserList = (props: IUserListProps) => {
    return (
      <div>
        {props.users.map(l => (
          <div>{l.id} - {l.name}</div>
        ))}
      </div>
    );
  }

  const mapStateToProps = (state: IRootState) => {
    return {
      users: state.users
    }
  }
  
  const UserList = connect(mapStateToProps)(PureUserList);

  export default UserList;
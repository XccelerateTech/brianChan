import * as React from 'react';
import UserCard from './userCard';


interface INameListProps {
    users?: object[];

    children?: JSX.Element[] | JSX.Element;

}

const UserList: React.SFC<INameListProps> = (props :any ) => {
    const users = props.users;
    const listItems = users.map((e:any, i:number) => {
        return <li key={e.id}>
            <UserCard firstName={e.firstName} lastName={e.lastName} age={e.age} occupation={e.occupation}/>
        </li>;
        
    }
    );
    return (
        <ul>{listItems}</ul>
    )
}

export default UserList;
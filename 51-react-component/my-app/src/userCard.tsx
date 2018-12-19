import * as faker from 'faker';
import * as React from 'react';


interface ICardProps {
    age?: number;
    children?: JSX.Element[] | JSX.Element;
    firstName?: string;
    lastName?: string;
    occupation?: string;
}

const UserCard: React.SFC<ICardProps> = (props:any) => {
    const style = {
        maxWidth: '18rem'
    }
    return (
        <div className="card text-white bg-primary mb-3" style={style}>
            <div className="card-header"><img src={faker.image.avatar()}/>

                <h3 className="card-title">User information </h3>
            </div>
            <div className="card-body">

                <p className="card-text"> First name: {props.firstName}</p>
                <p className="card-text"> Last name: {props.lastName}</p>
                <p className="card-text"> age: {props.age}</p>
                <p className="card-text"> occupation: {props.occupation}</p>

            </div>
        </div>
    )

}

export default UserCard
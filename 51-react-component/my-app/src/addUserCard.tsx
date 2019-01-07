import * as React from 'react';
import {IUserInfo} from './models';

interface IAddUserCardProps {
    addUser: (user: object) => void;
}



class AddUserCard extends React.Component<IAddUserCardProps, IUserInfo>{
    constructor(props: IAddUserCardProps) {
        super(props);

        this.state = {
            age: '0',
            firstName: 'null',
            id: 0,
            lastName: 'null',
            occupation: 'null'
        }
    }
   
    public render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label htmlFor="firstName">First Name :</label><br />
                    <input type="text" id="firstName" onChange={this.handleFirstNameOnChange} /><br />
                    <label htmlFor="lastName">Last Name :</label><br />
                    <input type="text" id="lastName" onChange={this.handleLastNameOnChange} /><br />
                    <label htmlFor="age">Age :</label><br />
                    <input type="text" id="age" onChange={this.handleAgeOnChange} /><br />
                    <label htmlFor="occupation">Occupation :</label><br />
                    <input type="text" id="occupation" onChange={this.handleOccupationOnChange} /><br />
                    <button>Submit</button>

                </form>
            </div>
        )
    }

    private handleFirstNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            firstName: e.target.value
        })
    }
    private handleLastNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lastName: e.target.value
        })
    }
    private handleAgeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            age: e.target.value
        })
    }
    private handleOccupationOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            occupation: e.target.value
        })
    }
    private handelSubmit = (e: any) => {
        e.preventDefault();

        this.props.addUser(this.state);
    }
}

export default AddUserCard
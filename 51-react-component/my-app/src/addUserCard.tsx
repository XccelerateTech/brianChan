import * as React from 'react';

interface IAddUserCardProps {
    addUser: (user: object) => void;
}

interface IAddUserCardState {
    id : number ,
    age: number,
    firstName: string,
    lastName: string,
    occupation: string
}


class AddUserCard extends React.Component<IAddUserCardProps, IAddUserCardState>{
    constructor(props: IAddUserCardProps,state: IAddUserCardState) {
        super(props,state);
    }
    public handleFirstNameOnChange = (e: any) => {
        this.setState({
            firstName: e.target.value
        })
    }
    public handleLastNameOnChange = (e: any) => {
        this.setState({
            lastName: e.target.value
        })
    }
    public handleAgeOnChange = (e: any) => {
        this.setState({
            age: e.target.value
        })
    }
    public handleOccupationOnChange = (e: any) => {
        this.setState({
            occupation: e.target.value
        })
    }
    public handelSubmit = (e: any) => {
        e.preventDefault();
        
        this.props.addUser(this.state);
    }
    public render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label htmlFor="firstName">First Name :</label><br />
                    <input type="text" id="firstName" onChange={this.handleFirstNameOnChange} /><br />
                    <label htmlFor="lastName">Last Name :</label><br />
                    <input type="text" id="lastName" onChange={this.handleLastNameOnChange}/><br />
                    <label htmlFor="age">Age :</label><br />
                    <input type="text" id="age" onChange={this.handleAgeOnChange} /><br />
                    <label htmlFor="occupation">Occupation :</label><br />
                    <input type="text" id="occupation" onChange={this.handleOccupationOnChange} /><br />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddUserCard
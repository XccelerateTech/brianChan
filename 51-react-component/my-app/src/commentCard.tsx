import * as faker from 'faker';
import * as React from 'react';


interface ICardProps {
    author: string;
    
    children?: JSX.Element[] | JSX.Element;
    
    comment: string;

    date: string;
    
}

const CommentCard: React.SFC<ICardProps> = (props:any) => {
    const style = {
        maxWidth: '18rem'
    }
    return (
        <div className="card text-white bg-primary mb-3" style={style}>
            <div className="card-header"><img src={faker.image.avatar()}/>

                <h3 className="card-title">{props.author} </h3>
            </div>
            <div className="card-body">

                <p className="card-text"> Today at {props.date}</p>
                <p className="card-text"> {props.comment}</p>
            </div>
        </div>
    )

}


export default CommentCard;
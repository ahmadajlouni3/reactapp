import {Component} from 'react';


class Card extends Component{
    render(){
        const {id , email , name , normalDesgin} = this.props;
        return (
            <div className={normalDesgin}>
                <img src={`https://robohash.org/${id}?set=set3`} alt={``} />
                <div>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {email}
                    </p>
                </div>
            </div>
        )
    }
}

export default Card;
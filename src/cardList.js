import { Component } from "react";
import Card from './card';
import './cardList.css';



class CardList extends Component{
    render(){
        const robots = this.props.robots;
        return(
            <div className="containerOfCards">
            {robots.map(user => {
                return (<Card 
                    normalDesgin="f5 bg-purple tc grow w-100 h-100 br3"
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    key={user.id}
                />)
            })}
            </div>
        )
    }
}

export default CardList;
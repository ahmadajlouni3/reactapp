import {Component} from 'react';
import './app.css';
import CardList from './cardList';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : '',
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>{
            this.setState({robots : [...data]});
        })
    }

    onSearchChange = (e) =>{
        this.setState({searchField : e.target.value})
    }


    

    render(){
        const filtered = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='ma0 pa0 tc white'>
                <h1>ROBOFRIENDS</h1>
                <input className="ma3 pa2 f4 white bg-purple" type='search' onChange={this.onSearchChange} placeholder='Type Here.......'/>
                <CardList robots={filtered}/>
            </div>
        )
    }
}

export default App;

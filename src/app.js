import { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import CardList from './cardList';
import { onSearchChange , onRequestRobots } from './actions';

const mapStateToProps = state => ({
    searchField : state.searchChange.searchField,
    robots : state.robotsData.robots,
    isPending : state.robotsData.isPending,
    error : state.robotsData.error
})
const mapDispatchToProps = dispatch => ({
    onSearchChange : (e) => dispatch(onSearchChange(e.target.value)),
    onRequestRobots : () => dispatch(onRequestRobots())
})

class App extends Component{
    componentDidMount(){
        this.props.onRequestRobots()
    }
    render(){
        const { searchField , onSearchChange , robots } = this.props;
        const filtered = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className='ma0 pa0 tc white'>
                <h1>ROBOFRIENDS</h1>
                <input className="ma3 pa2 f4 white bg-purple" type='search' onChange={onSearchChange} placeholder='Type Here.......'/>
                <CardList robots={filtered}/>
            </div>
        )
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(App);

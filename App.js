import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';
import { render } from '@testing-library/react';
import './App.css';
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => this.setState({robots: robots }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(event.target.value);
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <scroll>
                    <CardList robots = {filteredRobots} />
                    </scroll>
                    {/* <CardList robots = {filteredRobots} /> */}
                </div>
            );
        }
    }
}

export default App;

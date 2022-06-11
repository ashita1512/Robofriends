import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';
// import { render } from '@testing-library/react';
import './App.css';
// import axios from 'axios';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    // constructor(){ 
    //     super(this.props)
    //         this.state = {
    //             posts: []
    //         }
    // }
        componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
        .then(users => this.setState({robots: robots }));
    }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => {
    //         this.setState({
    //             posts: response.data
    //         })
    //         console.log(response.data)
    //     })
    // }
    // onSearchChange = (event) =>{
    //     this.setState({searchfield: event.target.value})
    // }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // loading addition 
        fetch()
        .then(response => response.json())
        .catch(length => this.setState == 0);

        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                <CardList robots = {filteredRobots} />
                </Scroll>
            </div> 
        );
    }
}

export default App;

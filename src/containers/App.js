import React, { Component } from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components//SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";



class App extends Component  {
    
    constructor(){
        super()
        this.state ={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response =>{ return Response.json(); })
    .then(users =>{
        this.setState({robots: users});
    })
        
    }

    onSearchChange = (event)=> {

        this.setState({ searchfield: event.target.value})
        
    }


    render(){
        const {robots, searchfield}= this.state;
        const filteredRobosts = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
            <CardList robots={filteredRobosts}/>
                </ErrorBoundry>
            </Scroll>
            
            </div>
        );

    }
    
    
}

export default App;



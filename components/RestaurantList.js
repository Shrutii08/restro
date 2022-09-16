import React, { Component } from 'react';

class RestaurantList extends Component {
    constructor()
    {
     super();
     this.state={
        list:null,
     }
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant").then((response) => {
        response.json().then((result) => {
            console.warn(result)
            this.setState({list:result})
        })
        })
    }
    render() {
     return (
            <div>
              <h1>Restaurant List</h1>
          
            </div>
        );
    }
}

export default RestaurantList;
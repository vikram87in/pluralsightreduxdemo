
import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Plural sight administration</h1>
                <p>React, Redux and react router in ES6</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
            
        );
    }
}

export default HomePage;
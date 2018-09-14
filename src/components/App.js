<<<<<<< HEAD
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
children: PropTypes.object.isRequired
};

=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
children: PropTypes.object.isRequired
};

>>>>>>> a37834bb84baaa3fe82cae863ed6e292d5e75f78
export default App;
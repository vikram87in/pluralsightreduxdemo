import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
<h1>Manage course page!!</h1>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return { state };
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types';
class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ''
            }
        };
    }

    onTitleChange = (e) => {
        let course = this.state.course;
        course.title = e.target.value;
        this.setState({ course });
    }

    onClickSave = () => {
        // this.props.dispatch(courseActions.createCourse(this.state.course));
        // this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    }

    courseRow = (course, index) => {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave} />

            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
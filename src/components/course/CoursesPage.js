import React, { Component } from 'react';

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
        alert(`saving... ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave} />

            </div>
        );
    }
}

export default CoursesPage;
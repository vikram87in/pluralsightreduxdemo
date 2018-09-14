<<<<<<< HEAD
import React, { Component } from 'react';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course:{
                title:null
            }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(e){
// // let val = e.target.value;
// let course = this.state.course;
// course.title = e.target.value;
// this.setState({course});
    }

    onClickSave(){

    }
    
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add course</h2> 
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="Save" onClick={this.onClickSave}/>
                
            </div>
        );
    }
}

=======
import React, { Component } from 'react';

class CoursesPage extends Component {
    render() {
        return (
            <div>
                <h1>Courses</h1>
            </div>
        );
    }
}

>>>>>>> a37834bb84baaa3fe82cae863ed6e292d5e75f78
export default CoursesPage;
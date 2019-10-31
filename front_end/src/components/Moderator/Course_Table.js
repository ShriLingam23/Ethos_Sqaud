import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Course_Table extends Component{

    constructor(props){
        super(props);

        this.state={
            course:props.course
        }

        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        axios.get('http://localhost:4000/api/course/delete/'+this.state.course._id)
            .then(
                res => console.log(res.data)
            )
    }

    render(){
        return(
            <tr>
                <th scope="row">{this.state.course.courseId}</th>
                <td scope="col">{this.state.course.courseName}</td>
                <td scope="col">{this.state.course.enrollment}</td>
                <td scope="col">{this.state.course.credit}</td>
                <td scope="col">{this.state.course.duration}</td>
                <td scope="col"><Link to={'/moderator/course/unit/'+this.state.course._id}><Button color="info">View</Button></Link></td>
                <td scope="col"><Link to={'/moderator/course/edit/'+this.state.course._id}><Button color="warning">Update</Button></Link></td>
                <td scope="col"><Button color="danger" onClick={this.onDelete}>Delete</Button></td>
            </tr>
        )
    }


}

export default Course_Table;
import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Unit_Table extends Component{

    constructor(props){
        super(props);

        this.state={
            unit:props.unit,
            course:props.course
        }

        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        axios.get('http://localhost:4000/api/unit/delete/'+this.state.unit._id)
            .then(
                res => console.log(res.data)
            )
    }

    render(){
        return(
            <tr>
                <th scope="row">{this.state.unit._id}</th>
                <td scope="col">{this.state.unit.title}</td>
                <td scope="col">{this.state.unit.content}</td>
                <td scope="col"><Link to={'/moderator/course/unit/'+this.state.course+'/'+this.state.unit._id}><Button color="info">View</Button></Link></td>
                <td scope="col"><Button color="danger" onClick={this.onDelete}>Delete</Button></td>
            </tr>
        )
    }


}

export default Unit_Table;
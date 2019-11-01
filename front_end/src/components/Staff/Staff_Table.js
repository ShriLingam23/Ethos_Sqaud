import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Staff_Table extends Component{

    constructor(props){
        super(props);

        this.state={
            staff:props.staff
        }

        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        axios.get('http://localhost:4000/api/user/delete/'+this.state.staff._id)
            .then(
                res => console.log(res.data)
            )
    }

    render(){
        return(
            <tr>
                <th scope="row">{this.state.staff.name}</th>
                <td scope="col">{this.state.staff.email}</td>
                <td scope="col">{this.state.staff.gender}</td>
                <td scope="col">{this.state.staff.phone}</td>
                <td scope="col">{this.state.staff.type}</td>
                <td scope="col"><Link to={'/staff/edit/'+this.state.staff._id}><Button color="info">Update</Button></Link></td>
                <td scope="col"><Button color="danger" onClick={this.onDelete}>Delete</Button></td>
            </tr>
        )
    }


}

export default Staff_Table;
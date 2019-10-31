import React,{Component} from 'react';
import axios from 'axios';
import { Alert,UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import {TiFilter,TiRefresh} from 'react-icons/ti';
import CourseTable from './Course_Table';

class Course_View extends Component{
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    constructor(props){
        super(props);

        this.state={
            courses:[],
            data:[],
            option:''
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);

        // this.fillOptions=this.fillOptions.bind(this);

    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/course/get')
            .then(
                courses=>{
                    this.setState({courses:courses.data},()=>{
                        console.log(this.state.courses)
                    })
                }
            )

            //console.log(this.state.staffs.length)
    }

    componentWillUpdate(){
        axios.get('http://localhost:4000/api/course/get')
            .then(
                courses=>this.setState({courses:courses.data})
            )
    }

    fillTable(){

        if(this.state.courses.length!=0){
            return(
                <div className='card' style={{marginTop:'25px'}}>
                        <table className="table table-hover table-responsive-md table-striped" style={{marginBottom:'5px'}}>
                            <thead style={{backgroundColor:'#bdbdbd'}}>
                                <tr>
                                    <th scope="col">Course ID</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Enrollment Key</th>
                                    <th scope="col">Credit</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col" colSpan='3'></th>
                                </tr>
                            </thead>
                        <tbody>
                            {
                                this.state.courses.map(course=>{
                                    return <CourseTable key={course._id} course={course}/>
                                })
                            }
                        </tbody>
                        </table>
                        </div>
            )
        }
        else{
            return(
                <div className='container' style={{marginTop:'20px'}}>
                    <UncontrolledAlert color="warning">
                        <h4 className="alert-heading">No Data Available</h4>
                        <p>
                        Aww yeah, you successfully read this important alert message. This example text is going
                        to run a bit longer so that you can see how spacing within an alert works with this kind
                        of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                        </p>
                    </UncontrolledAlert>
                    
                </div>
            )
        }
         
    }

    checkData(){
        if(this.state.courses.length>0){

            return(
                <div className='container' style={{marginTop:'20px'}}>

                    <LineChart
                        width={800}
                        height={340}
                        data={this.state.data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                        style={{marginLeft:'150px'}}
                        fill="#8884d8"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#000"/>
                        <YAxis stroke="#000"/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="staffs" stroke="#db5400" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="students" stroke="#f5a800" />

                    </LineChart>

                    {/* <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-4">
                            <select className="form-control" id="filterOpt" onClick={this.optionSelected}>
                                <option>Choose a option...</option>
                                <option>Faculty</option>
                                <option>Academic Year</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            {this.fillOptions()}
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-warning form-control" onClick={this.filterCourse}>Filter <TiFilter size='30px'/></button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-danger form-control" onClick={this.resetCourse}>Reset <TiRefresh size='30px'/></button>
                        </div>
                    </div> */}
                
                    {this.fillTable()}

                    <br></br>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Link to='/moderator/course/add'><Button color="info">Add a New Course</Button></Link>
                    </div>
                </div>
            )

        }
        else{
            return(
                <div className='container' style={{marginTop:'150px'}}>
                    <UncontrolledAlert color="warning">
                        <h4 className="alert-heading">No Data Available</h4>
                        <p>
                        Aww yeah, you successfully read this important alert message. This example text is going
                        to run a bit longer so that you can see how spacing within an alert works with this kind
                        of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                        </p>
                    </UncontrolledAlert>
                    <br></br>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Link to='/moderator/course/add'><Button color="info">Add a New Course</Button></Link>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.checkData()
    }


}

export default Course_View;
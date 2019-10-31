import React,{Component} from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';

import {FiBook} from 'react-icons/fi'

import {IoIosKey} from "react-icons/io"
import {IoMdStarHalf} from "react-icons/io"
import {IoIosJournal} from "react-icons/io"
import {IoIosTime} from "react-icons/io"

class Course_Edit extends Component{

    constructor(props) {
        super(props);
        
        this.state = { 
            visible: false,
            courseId:'',
            courseName:'',
            enrollment:'',
            credit:'',
            duration:''
        };

        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

        this.onDismiss = this.onDismiss.bind(this);
        this.newlyUpdated = this.newlyUpdated.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/course/get/'+this.props.match.params.id)
            .then(
                course =>{
                    this.setState({
                        courseId:course.data._id,
                        courseName:course.data.courseName,
                        enrollment:course.data.enrollment,
                        credit:course.data.credit,
                        duration:course.data.duration,
                    })

                    console.log(course)
                }    
            )
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    newlyUpdated(){
        if(this.state.visible){
            return (
                <div>
                    <Alert color="primary" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
                        Course Details Successfully Updated
                    </Alert>
                </div>
            );
        }
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onFormSubmit(e){
        e.preventDefault();
        const courseName = this.state.courseName;
        const enrollment = this.state.enrollment;
        const credit = parseInt(this.state.credit);
        const duration = this.state.duration;
        console.log(courseName,enrollment,credit,duration);

        const course={
            courseName,
            enrollment,
            credit,
            duration
        }

        axios.post('http://localhost:4000/api/course/update/'+this.props.match.params.id,course)
            .then(
                res=>{
                    console.log(res.data)
                    // document.getElementById('staffForm').reset()
                    this.setState({
                        visible:true,
                        courseName:'',
                        enrollment:'',
                        credit:'',
                        duration:''});

                },
                err=>console.log(err)
            )
        
        setTimeout(()=>{
            this.props.history.push('/moderator/course/view/')
        },1500);
        
    }

    showPass(){
        var x = document.getElementById("enrollment");
        x.type="text";
    }

    hidePass(){
        var x = document.getElementById("enrollment");
        x.type="password";
    }

    render(){
        return(
            <div className="container" style={{paddingTop:'20px'}}>
                
                {this.newlyUpdated()}
                {/* <!--Body--> */}

                <main role="main" style={{marginTop:'10px'}}>

                    <section className="jumbotron text-center" >
                        <div className="container" style={{backgroundColor:'#f9fbe7',marginTop:'-30px',marginBottom:'-30px'}}>

                            <div className='row' >
                                <div className='col-md-4 bg-info text-white text-center'>
                                    <div className="card-body" >
                                        <FiBook size="200px" style={{paddingTop:'50px'}}/>
                                        <h2 className="py-3">Course Update</h2>
                                        <p>
                                        Courses are designed for continuing personal development and are offered by a number of leading universities, schools, and other educational institutions around the world.
                                        </p>
                                    </div>
                                </div>

                                {/* form section */}
                                <div className="col-md-8 py-5 border">
                                    <h4 className="pb-4">Please Fill details of Course to be Updated</h4>
                                    <form id='staffForm' onSubmit={this.onFormSubmit}>
                                        <div className="form-row">
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><IoIosJournal/></div>
                                                </div>
                                                <input 
                                                    name="courseName" 
                                                    placeholder="Course Name"
                                                    className="form-control"
                                                    required="required"
                                                    type="text"
                                                    // pattern="[A-Za-z ]{1,}"
                                                    onChange={this.onValueChange}
                                                    value={this.state.courseName} />
                                            </div>
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><IoIosKey/></div>
                                                </div>
                                                <input 
                                                    name="enrollment" 
                                                    placeholder="Enrollment Key" 
                                                    className="form-control" 
                                                    required="required" 
                                                    type="password"
                                                    // pattern="\S+"
                                                    onChange={this.onValueChange}
                                                    value={this.state.enrollment} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><IoMdStarHalf/></div>
                                                </div>
                                                <input 
                                                    name="credit" 
                                                    placeholder="Course Credit"
                                                    className="form-control"
                                                    required="required"
                                                    type="number"
                                                    // pattern="[A-Za-z ]{1,}"
                                                    onChange={this.onValueChange}
                                                    value={this.state.credit} />
                                            </div>
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><IoIosTime/></div>
                                                </div>
                                                <input 
                                                    name="duration" 
                                                    placeholder="Duration" 
                                                    className="form-control" 
                                                    required="required" 
                                                    type="text"
                                                    // pattern="\S+"
                                                    onChange={this.onValueChange}
                                                    value={this.state.duration} />
                                            </div>
                                        </div>
                                
                                        <div className="form-row">
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                                    <label className="form-check-label" >
                                                        <small>By clicking Submit, you agree to our Terms & Conditions, Visitor Agreement and Privacy Policy.</small>
                                                    </label>
                                                    </div>
                                                </div>
                                        
                                            </div>
                                        </div>
                                        
                                        <div className="form-row" style={{display:'flex',justifyContent:'center'}}>
                                            <button type='submit' className="btn btn-danger">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    
                    </section>
                </main>

            </div>
        );
    }
}

export default Course_Edit;
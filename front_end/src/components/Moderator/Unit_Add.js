import React,{Component} from 'react';
import axios from 'axios';
import { Alert ,Spinner} from 'reactstrap';

import {FiBook} from 'react-icons/fi'

import {IoIosKey} from "react-icons/io"
import {IoMdStarHalf} from "react-icons/io"
import {IoIosJournal} from "react-icons/io"
import {FaPlusSquare} from "react-icons/fa"
import {FaQuestion} from "react-icons/fa"
import {IoIosPeople} from "react-icons/io"

class Unit_Add extends Component{

    constructor(props) {
        super(props);

        this.state = { 
            visible: false,
            pending: false,
            title:'',
            content:'',
            courses:props.match.params.id,
            question:'',
            option1:'',
            correct1:'',
            option2:'',
            correct2:'',
            option3:'',
            correct3:'',
            option4:'',
            correct4:''
        };

        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

        this.onDismiss = this.onDismiss.bind(this);
        this.newlyAdded = this.newlyAdded.bind(this);
        this.checkPending = this.checkPending.bind(this);
    }

    componentDidMount(){
        
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    newlyAdded(){
        if(this.state.visible){
            return (
                <div>
                    <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
                        New Unit details successfully added to the System!
                    </Alert>
                </div>
            );
        }
    }

    checkPending(){
        if(this.state.pending){

            return (
                <div className="col-md-8 py-5 border" >
                    <Spinner style={{ width: '10rem', height: '10rem',paddingTop:'50px'}} type="grow" color="warning" />
                </div>
            )

        }
        else{
            return(
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please Fill New Unit details</h4>
                    <form id='staffForm' onSubmit={this.onFormSubmit}>
                        <div className="form-row" style={{marginTop:"20px"}}>
                            <div className="input-group form-group col-md-6" >
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><IoIosJournal/></div>
                                </div>
                                <input 
                                    name="title" 
                                    placeholder="Unit Title"
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
                                    name="content" 
                                    placeholder="Unit content" 
                                    className="form-control" 
                                    required="required" 
                                    type="text"
                                    // pattern="\S+"
                                    onChange={this.onValueChange}
                                    value={this.state.enrollment} />
                            </div>
                        </div>
                        {/* Question */}
                        <div className="form-row" style={{marginTop:"20px"}}>
                            <div className="input-group form-group col-md-12">
                                <div className="form-control bg-dark text-info text-light" style={{height:'60px',marginTop:'20px'}}>  
                                    <h4><IoIosPeople size="50px" style={{marginRight:'10px'}}/>Questions</h4>
                                </div>
                            </div>
                        </div>
                        <div className="form-row" style={{marginTop:"20px"}}>
                            <div className="input-group form-group col-md-12">
                                <div className="input-group-prepend">
                                    <div className="input-group-text "><FaQuestion/></div>
                                </div>
                                <input 
                                    name="question" 
                                    placeholder="Question" 
                                    className="form-control" 
                                    required="required" 
                                    type="text"
                                    // pattern="\S+"
                                    onChange={this.onValueChange}
                                    value={this.state.question} />
                            </div>
                        </div>

                        <div className="form-row" style={{marginTop:"20px"}}>
                            <div className="input-group form-group col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FaPlusSquare/></div>
                                </div>
                                <input 
                                    name="option1" 
                                    placeholder="Option" 
                                    className="form-control" 
                                    required="required" 
                                    type="text"
                                    // pattern="\S+"
                                    onChange={this.onValueChange}
                                    value={this.state.option1} />
                            </div>
                            <div className="input-group form-group col-md-3">
                                
                                <input 
                                    type="radio" 
                                    name="correct1" 
                                    value={true}
                                    onChange={this.onValueChange} />TRUE
                            </div>
                            <div className="input-group form-group col-md-3">
                                
                                <input 
                                    type="radio" 
                                    name="correct1" 
                                    value={false}
                                    onChange={this.onValueChange} />FALSE
                            </div>
                        </div>

                        <div className="form-row" style={{marginTop:"20px"}}>
                            <div className="input-group form-group col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FaPlusSquare/></div>
                                </div>
                                <input 
                                    name="option2" 
                                    placeholder="Option" 
                                    className="form-control" 
                                    required="required" 
                                    type="text"
                                    // pattern="\S+"
                                    onChange={this.onValueChange}
                                    value={this.state.option2} />
                            </div>
                            <div className="input-group form-group col-md-3">
                                <input 
                                    type="radio" 
                                    name="correct2" 
                                    value={true}
                                    onChange={this.onValueChange} />TRUE
                            </div>
                            <div className="input-group form-group col-md-3">
                                <input 
                                    type="radio" 
                                    name="correct2" 
                                    value={false}
                                    onChange={this.onValueChange} />FALSE
                            </div>
                        </div>

                        <div className="form-row" style={{marginTop:"20px"}}>
                            <div className="input-group form-group col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FaPlusSquare/></div>
                                </div>
                                <input 
                                    name="option3" 
                                    placeholder="Option" 
                                    className="form-control" 
                                    required="required" 
                                    type="text"
                                    // pattern="\S+"
                                    onChange={this.onValueChange}
                                    value={this.state.option3} />
                            </div>
                            <div className="input-group form-group col-md-3">
                                {/* <div className="input-group-prepend">
                                    <div className="input-group-text"><IoIosKey/></div>
                                </div> */}
                                <input 
                                    type="radio" 
                                    name="correct3" 
                                    value={true}
                                    onChange={this.onValueChange} />TRUE
                            </div>
                            <div className="input-group form-group col-md-3">
                                {/* <div className="input-group-prepend">
                                    <div className="input-group-text"><IoIosKey/></div>
                                </div> */}
                                <input 
                                    type="radio" 
                                    name="correct3" 
                                    value={false}
                                    onChange={this.onValueChange} />FALSE
                            </div>
                        </div>

                        <div className="form-row" style={{marginTop:"20px"}}>
                            <div className="input-group form-group col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FaPlusSquare/></div>
                                </div>
                                <input 
                                    name="option4" 
                                    placeholder="Option 4" 
                                    className="form-control" 
                                    required="required" 
                                    type="text"
                                    // pattern="\S+"
                                    onChange={this.onValueChange}
                                    value={this.state.option4} />
                            </div>
                            <div className="input-group form-group col-md-3">
                                <input 
                                    type="radio" 
                                    name="correct4" 
                                    value={true}
                                    onChange={this.onValueChange} />TRUE
                            </div>
                            <div className="input-group form-group col-md-3">
                                <input 
                                    type="radio" 
                                    name="correct4" 
                                    value={false}
                                    onChange={this.onValueChange} />FALSE
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
                
                
            )
        }
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onFormSubmit(e){
        //this.setState({pending:true})
        e.preventDefault();

        const title = this.state.title;
        const content= this.state.content;
        const courses= this.state.courses;
        const question= this.state.question;
        const option1= this.state.option1;
        const correct1= this.state.correct1;
        const option2= this.state.option2;
        const correct2= this.state.correct2;
        const option3= this.state.option3;
        const correct3= this.state.correct3;
        const option4= this.state.option4;
        const correct4= this.state.correct4;
        // console.log(title,content,courses,question,option1,correct1,option2,correct2,option3,correct3,option4,correct4);

        const unit = {
            title,
            content,
            courses,
            question,
            option1,
            correct1,
            option2,
            correct2,
            option3,
            correct3,
            option4,
            correct4
        }

        console.log(unit);

        axios.post('http://localhost:4000/api/question/custom/uq/add',unit)
            .then(
                res=>{
                    console.log(res.data)

                    this.setState({
                        visible:true,
                        pending:false,
                        title:'',
                        content:'',
                        courses:'',
                        question:'',
                        option1:'',
                        correct1:'',
                        option2:'',
                        correct2:'',
                        option3:'',
                        correct3:'',
                        option4:'',
                        correct4:''});
                },
                err=>console.log(err)
            )

    }

    render(){
        return(
            <div className="container" style={{paddingTop:'20px'}}>
                
                {this.newlyAdded()}
                {/* <!--Body--> */}

                <main role="main" style={{marginTop:'10px'}}>

                    <section className="jumbotron text-center" >
                        <div className="container" style={{backgroundColor:'#f9fbe7',marginTop:'-30px',marginBottom:'-30px'}}>

                            <div className='row' >
                                <div className='col-md-4 bg-info text-white text-center'>
                                    <div className="card-body" >
                                        <FiBook size="200px" style={{paddingTop:'50px'}}/>
                                        <h2 className="py-3">Add Unit to Course</h2>
                                        <p>
                                        Courses are designed for continuing personal development and are offered by a number of leading universities, schools, and other educational institutions around the world.
                                        </p>
                                    </div>
                                </div>

                                {/* form section */}
                                {this.checkPending()}
                            </div>
                        </div>
                    
                    </section>
                </main>

            </div>
        );
    }
}

export default Unit_Add;
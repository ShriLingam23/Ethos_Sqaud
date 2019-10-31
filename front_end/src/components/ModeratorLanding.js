import React,{Component} from 'react';
import {Link} from 'react-router-dom'

import course from '../assets/img/login.jpg'
import instructor from '../assets/img/groupStudy.jpg'
import student from '../assets/img/graduate.jpg'
import '../assets/css/Landing.css'
import '../assets/css/StudentDashboard.css'

import Slide from './Slides'
import Notice_View from './Notice/Notice_View'

class ModeratorLanding extends Component{
    

    render(){
        return (
            <div className="container" style={{paddingTop:'20px'}}>

                 {/* <!--Body--> */}

                 <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                        {/* <h1 className="jumbotron-heading">Album example</h1> */}
                        <Slide/>
                        {/* <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p> */}
                        {/* <p>
                            <a href="#" className="btn btn-primary my-2">Main call to action</a> { }
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p> */}
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">

                            {/* Main Body Start*/}
                            <div class="container bootstrap snippet" style={{marginLeft:"180px"}}>
                                <div class="row">
                                    <div class="col-lg-2 col-sm-6">
                                        <div class="circle-tile ">
                                            <a href="#"><div class="circle-tile-heading dark-blue"><i class="fa fa-book fa-fw fa-3x"></i></div></a>
                                            <div class="circle-tile-content dark-blue">
                                            <div class="circle-tile-description text-faded"> Course</div>
                                            <div class="circle-tile-number text-faded ">265</div>
                                                <a class="circle-tile-footer" href="#"></a>
                                                <button type="button" className="btn btn-sm"><Link to='/moderator/course/view'>More Info<i class="fa fa-chevron-circle-right"></i></Link></button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-2 col-sm-6" style={{marginLeft:"100px"}}>
                                        <div class="circle-tile ">
                                            <a href="#"><div class="circle-tile-heading red"><i class="fa fa-users fa-fw fa-3x"></i></div></a>
                                            <div class="circle-tile-content red">
                                            <div class="circle-tile-description text-faded"> Student </div>
                                            <div class="circle-tile-number text-faded ">10</div>
                                                <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 col-sm-6" style={{marginLeft:"100px"}}>
                                        <div class="circle-tile ">
                                            <a href="#"><div class="circle-tile-heading orange"><i class="fa fa-user fa-fw fa-3x"></i></div></a>
                                            <div class="circle-tile-content orange">
                                            <div class="circle-tile-description text-faded"> Profile </div>
                                            <div class="circle-tile-number text-faded ">10</div>
                                                <a class="circle-tile-footer" href="#">More Info<i class="fa fa-chevron-circle-right"></i></a>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                            </div>  
                        
                            {/* Main Body End*/}


                        </div>
                    </div>

                    <div className="container bg-light" style={{marginTop:'20px',marginBottom:'50px',paddingTop:'50px',paddingBottom:'50px'}}>
                        <Notice_View/>
                    </div>

                    </main>


            
            </div>

            

            
        )
    }
}

export default ModeratorLanding;
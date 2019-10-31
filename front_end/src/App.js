import React from 'react';
import {BrowserRouter,Route,Switch, Link} from 'react-router-dom'
import './App.css';
import './assets/css/Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import AdminLanding from './components/AdminLanding'
import StudentLanding from './components/StudentLanding'
import ModeratorLanding from './components/ModeratorLanding'


import StaffRegister from './components/Staff/Staff_Register'
import Staff_View from './components/Staff/Staff_View';
import Staff_Edit from './components/Staff/Staff_Edit';

import CourseRegister from './components/Course/Course_Register';
import Course_View from './components/Course/Course_View';
import Course_Edit from './components/Course/Course_Edit';

import Student_View from './components/Student_Admin/Student_View';
import Student_Profile from './components/Student_Admin/Student_Profile';
import SignInSide from './signin';

function App() {
  
  return (
    <BrowserRouter>
      <div className="parallax">
        <Header/>
          
          <Switch>
            <Route exact path='/' component={AdminLanding}/>
            <Route exact path='/student' component={StudentLanding}/>
            <Route exact path='/moderator' component={ModeratorLanding}/>
            
            <Route exact path='/staff/add' component={StaffRegister}/>
            <Route exact path='/staff/view' component={Staff_View}/>
            <Route exact path='/staff/edit/:id' component={Staff_Edit}/>

            <Route exact path='/course/add' component={CourseRegister}/>
            <Route exact path='/course/view' component={Course_View}/>
            <Route exact path='/course/edit/:id' component={Course_Edit}/>

            <Route exact path='/student/view/' component={Student_View}/>
            <Route exact path='/student/edit/:id' component={Student_Profile}/>
            
            <Route exact path='/login' component={SignInSide} />

          </Switch>  
            
          
        
      </div>
    </BrowserRouter>
  );
}

export default App;

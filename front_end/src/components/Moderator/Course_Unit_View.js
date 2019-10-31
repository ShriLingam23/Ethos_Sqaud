import React,{Component} from 'react';
import axios from 'axios';
import { Alert,UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import {TiFilter,TiRefresh} from 'react-icons/ti';
import CourseTable from './Course_Table';
import Unit_Table from './Unit_Table';

class Course_Unit_View extends Component{
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    constructor(props){
        super(props);

        this.state={
            units:[],
            data:[],
            option:'',
            course:this.props.match.params.id
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);

        // this.fillOptions=this.fillOptions.bind(this);

    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/unit/custom/get/'+this.props.match.params.id)
            .then(
                units=>{
                    this.setState({units:units.data.data},()=>{
                        console.log(this.state.units.length)
                    })
                }
            )

            //console.log(this.state.staffs.length)
    }

    // componentWillUpdate(){
    //     axios.get('http://localhost:4000/api/unit/custom/get/'+this.props.match.params.id)
    //         .then(
    //             units=>this.setState({units:units.data})
    //         )
    // }

    fillTable(){
        if(this.state.units.length>0){
            console.log(this.state.units.length)
            return(
                <div className='card' style={{marginTop:'25px'}}>
                    <table className="table table-hover table-responsive-md table-striped" style={{marginBottom:'5px'}}>
                        <thead style={{backgroundColor:'#bdbdbd'}}>
                            <tr>
                                <th scope="col">Unit ID</th>
                                <th scope="col">Unit Title</th>
                                <th scope="col">content</th>
                                <th scope="col" colSpan='3'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.units.map(unit=>{
                                    return <Unit_Table key={unit._id} unit={unit} course={this.state.course}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            );
        } 
         
    }

    checkData(){
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

            
                {this.fillTable()}
            </div>
        )
    }

    render(){
        return this.checkData()
    }


}

export default Course_Unit_View;
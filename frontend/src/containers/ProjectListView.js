import React, { Component } from 'react';
import axios from 'axios';
import Projects from '../components/Projects';


class projectList extends Component {
 
    state={
      projects:[]
    }
  
  componentDidMount(){
   axios.get('http://127.0.0.1:8000/api/')
         .then(resp=>{
           this.setState({
             projects:resp.data
             
           });
           
           
         });         

  } 
  render() {
      
    return (
      <div className="App">  
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default projectList;

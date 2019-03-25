import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import CustomLayout from './containers/Layout';
import Projects from './components/Projects';

class App extends Component {
 
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
     
        <CustomLayout >
        <Projects projects={this.state.projects}/>
        </CustomLayout>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import { Card,Radio} from 'antd';



class ProjectDetail extends Component {
 
    state={
      project:{}
    }
  
  componentDidMount(){
    const project_id=this.props.match.params.projectID;
    console.log(project_id);
    
   axios.get(`http://127.0.0.1:8000/api/${project_id}`)
         .then(resp=>{
           this.setState({
             project:resp.data
             
             
             
           });
           
           console.log(resp.data);
         });
         
           

  }
 
  
  render() {
    const {Meta}=Card
      
    return (
          <Card style={{marginRight:20}}>
           
            <Meta
            title={this.state.project.title}
            description={this.state.project.category}
            />
           <p style={{marginTop:20}}>Updated at : {this.state.project.updated}</p>
           
          <Radio display='block' defaultChecked={this.state.project.done} style={{marginTop:20,width:'100%'}}>Done ?</Radio>     
         </Card>
    );
  }
}

export default ProjectDetail;

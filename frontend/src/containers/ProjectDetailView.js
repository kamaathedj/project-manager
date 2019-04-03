import React, { Component } from 'react';
import axios from 'axios';
import { Card,Radio,Button,Icon,message} from 'antd';



class ProjectDetail extends Component {
 
    state={
      project:{}
    }
 
  
  componentDidMount(){
    const project_id=this.props.match.params.projectID;  
   axios.get(`http://127.0.0.1:8000/api/${project_id}`)
         .then(resp=>{
           this.setState({
             project:resp.data  
             
           });

         });
  }
 
  
  render() {
        const ondelete=()=>{
        message.warn(`You have delete this project!`,[3])
        this.props.history.push('/')
        // this.forceUpdate()
        }
    const {Meta}=Card   
    return (
      <div>
          <Card style={{marginRight:20}}>
           
            <Meta
            title={this.state.project.title}
            description={this.state.project.category}
            />
           <p style={{marginTop:20}}>Updated at : {this.state.project.updated}</p>
           
          <Radio display='block' defaultChecked={this.state.project.done} style={{marginTop:20,width:'100%'}}>Done ?</Radio> 

           <Button  type="danger" style={{marginRight:20,marginTop:20}} onClick={ondelete} href='/'>
          <Icon type='delete'/>
          Delete 
          </Button>  
         </Card>
         
      </div>
    );
  }
}

export default ProjectDetail;

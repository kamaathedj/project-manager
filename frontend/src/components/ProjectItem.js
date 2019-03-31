import React, { Component } from 'react';
import { List,Card,Button,Icon,Radio,message} from 'antd';

class ProjectItem extends Component {
 
  render() {
    
    const {Meta}=Card
   
    const doneButton=()=>{
      message.success(`${this.props.project.title} is completed!`,[2])
    }
    return (
      <List className="projects" grid={{gutter: 25,column: 4}} >
      <List.Item>
         <Card style={{marginRight:10,marginLeft:10}}>
           
            <Meta
            title={this.props.project.title}
            description={this.props.project.category}
            />
           
          <Radio display='block' defaultChecked={this.props.project.done} style={{marginTop:20,width:'100%'}} onClick={doneButton}>Done ?</Radio>  
          <Button  type="primary" href={this.props.project.id}  style={{marginRight:20,marginTop:20}}>
          <Icon type='right'/>
          Track progress.
          </Button>
          
         </Card>
         
      </List.Item>
   
      </List> 
    );
    
    
  }
}

export default ProjectItem;

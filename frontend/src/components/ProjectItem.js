import React, { Component } from 'react';
import { List,Card,Button,Icon,Radio,message} from 'antd';

class ProjectItem extends Component {
 
  render() {
    
    const {Meta}=Card
    const info=()=>{
      message.info(`we are currently working hard to bring this functionality!`,[3])
    }
    const doneButton=()=>{
      message.success(`${this.props.project.title} is completed!`,[2])
    }
    return (
      <List className="projects" grid={{gutter: 25,column: 4}} >
      <List.Item>
         <Card style={{marginRight:0}}>
           
            <Meta
            title={this.props.project.title}
            description={this.props.project.category}
            />
           <p style={{marginTop:20}}>Updated at : {this.props.project.updated}</p>
           
          <Radio display='block' defaultChecked={this.props.project.done} style={{marginTop:20,width:'100%'}} onClick={doneButton}>Done ?</Radio>  
          <Button  type="primary"  href={this.props.project.id} style={{marginRight:20,marginTop:20}} onClick={info}>
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

import React, { Component } from 'react';
import ProjectItems from './ProjectItem';

class Projects extends Component {

  render() {
        let projectItems;
        
        if (this.props.projects) {
          projectItems=this.props.projects.map(project => {
        
          return(
           
            <ProjectItems key={project.id} project={project}/>
          );
          });
         
        }
    return (
      <div className="projects">
      
         {projectItems}
        
      </div>
    );
  }
}

export default Projects;

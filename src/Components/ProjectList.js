import React, { Component } from 'react';
import Project from "./Project";
import "./card.css"

class ProjectList extends React.Component {

       constructor(props){
        super(props);

        this.state={


        }

       }
       render(){
           console.log("projects : ", this.props.projects);
           return(
               <div className="projectList">

            {
              this.props.projects.map(project=>{

              return <Project key={project.id} project={project} deleteHandler={this.props.deleteHandler}/>

            })

            }
          </div>
         )     
    
       }
}

export default ProjectList






import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap'

class Project extends React.Component{

    constructor(props){
     super(props);


    }

    deleteProject=()=>{
       this.props.deleteHandler(this.props.project.id)
    }
 render(){
  console.log("This project", this.props.project) 
   return(
      <div>

   
   <Card className="cards" body inverse>
     <CardBody>
       <CardTitle>{ this.props.project.name}</CardTitle>
       <CardText>{ this.props.project.description}</CardText>
     </CardBody>
     <CardBody>
       <CardText>{  this.props.project.completed}</CardText>
     </CardBody>

     <Button onClick={this.deleteProject}>Delete</Button>
     
   </Card>


      </div>
      


   )



 }   


}

export default Project
  
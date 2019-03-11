import React from "react"
import {Col, Row, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap"
import "./form.css"

class ProjectForm extends React.Component{
       constructor(props){
           super(props)
           this.state={
             "name": "",
            "description": "",
            "completed": false,
            
           
             

           }


       }

       changeHandler=(event)=>{
        
         this.setState({[event.target.name]:event.target.value})

       }
       clickHandler=(event)=>{
          
        event.preventDefault();
        console.log("Add project")
        this.props.submitFn(this.state.name,this.state.description, this.state.completed)
        this.setState({"name":"","description":"",completed:false})
        

       }
       render(){
          return(
             <div className="ProjectForm">
             <Form className="Form">
               <Row form>
                  <Col md={2}>
                      <FormGroup>
                        <Label for="title"></Label>
                        <Input type="text" name="name" id="name" placeholder="enter name" onChange={this.changeHandler}/>
                      </FormGroup>
                  </Col>
               </Row>
               <Row>   
                  <Col md={4}>
                     <FormGroup>
                        <Label for="contents"></Label>
                        <Input type="textarea" name="description" id="description" placeholder="enter description" onChange={this.changeHandler} />
                     </FormGroup>
                  </Col>
               </Row> 

            

               <Button onClick={this.clickHandler}>Add Post</Button>

            </Form>

             </div>   
          )


       }


}
export default ProjectForm
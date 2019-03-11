import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import  ProjectList from "./Components/ProjectList"
import PostForm from "./Components/ProjectForm"

class App extends Component {
       
       constructor(props){
         super(props);
          this.state={
             projects:
              [
                {
                 "name": "",
                 "description": "",
                 "completed": false
                },
              ],
              "API_URL" : "http://localhost:8080/"
          }
        } 
        createNewProject=(name, description,completed)=>{
          const newProject=
            {
             "name": name,
             "description": description,
             "completed":false  
            }
            axios.post(this.state.API_URL + "api/projects",newProject)
             .then(res=>{
               console.log("POST RESPONSE",res)
               //this.setState({projects:res.data})
               this.refresh();
               
 
             })
             .catch(err=>{
               //console.log(err);
               this.setState({error:err})
             })
 
       }
       componentDidMount() {
          this.refresh()  
       }
 
      refresh=()=>{
        const axios = require('axios');

        const config = {	headers: {'Content-Type': 'application/json','Cache-Control' : 'no-cache'}};
        axios.get(this.state.API_URL + "api/projects")
       .then(res=>{
          console.log("GET RESPONSE",res)
          this.setState({projects:res.data})   
       }).catch(err=>{
         console.log("Error: ", err)
       })
      }
 
      deleteHandler=(id)=>{
        axios.delete(this.state.API_URL + "api/projects/" +id)
             .then(res=>{
                console.log("DELETE RESPONSE",res)
                this.refresh();
             })
             .catch(error=>{
               console.log(error)
             })
 
      }
      
     
   clickHandler = (event) => {
     
   }
 
   render() {
     return (
       <div className="App">
       <h2>WELCOME TO THE PROJECTS</h2>
        <ProjectList projects={this.state.projects} deleteHandler={this.deleteHandler} />
        <PostForm submitFn={this.createNewProject}/>
       </div>
     );
   }
 } 
      

export default App;

import React from 'react';
import Card from './components/Card/index.js';
import './App.css';
//import { render } from '@testing-library/react';

//used for getting contacts
const HEADERS = {
  "method": "GET",
  "headers": {
    "API": "sinvil",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

//used for posting new contacts to the api 
const HEADERS2 = {
  "method": "POST",
  "headers": {
    "API": "sinvil",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

export default class App extends React.Component{
  state = {contacts: []}
  callApi() {
    fetch('http://plato.mrl.ai:8080', HEADERS)
      .then(response => response.json())
      .then(body => console.log(body))
  }

  componentDidMount(){
    console.log("Effect has run")
    this.setState({contacts:[]})
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fetch('http://plato.mrl.ai:8080/contacts', HEADERS)
            .then(response => response.json())
            .then(body => this.setState({contacts:body.contacts})))}, 3000)
      })
  }
  
  render(){
    return (
      <div className="card">
        <button
        onClick={() => this.callApi()}
        title= "Call the API"
        >Call the API</button>

        {
          //maps to the contacts of the API and presents the name and posotion
          this.state.contacts.map((contact, i) => <Card key={i} title={contact.name}/>)
        }
      </div>
    );
  }
}


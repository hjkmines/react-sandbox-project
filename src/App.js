import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    students: [
      'Tony', 
      'Jess', 
      'Mez', 
      'Stacy'
    ], 
    currentUser: { name: 'Damon' }
  }

  createCards = () => {
    return this.state.students.map(student => {
      return <Card name={student} />
    })
  }

  render() {
   <div className='App'> 
    <Header image={this.state.currentUser.image} />
    <ul>
    {this.createCards()}
    </ul>
   </div> 
  }
}
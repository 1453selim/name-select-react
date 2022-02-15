import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "Cornelius"
    };
    this.changeName = this.changeName.bind(this)
    
  }
  changeName(newName) {
    this.setState({
      name:newName
    })
  }

  render() {
    return (
      <div>
        <Select onChange = {this.changeName} />
        <Name name ={this.state.name} />
      </div>
    );
  }
}


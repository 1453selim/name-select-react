import React from 'react';
import {names} from "./names";
import axios from 'axios';

export class Select extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      name : []
    }
  
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e){
    const name = e.target.value;
    this.props.onChange(name)
    
  }
  componentDidMount() { 
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
     const newData =res.data
     const names = [];
     newData.map(item =>names.push(item.name))
     console.log(names)
     this.setState({
       name:names
     })
     console.log(this.state.name)
    })


    
  
    
   }


  render() {
    console.log(this.state.name)
    return (
      <div>
        <h1>Pickup a name :</h1>
        {<select id="great-names"
        onChange={this.handleChange}>
          {names.map((name,index)=>{
            return <option key = {index} value={name}>{name} </option>

          })}
          {/* { <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option> } */}
        </select> }


        <select id="great-names"
        onChange={this.handleChange}>
          {this.state.name.map((name,index)=>{
            return <option key = {index} value={name}>{name} </option>

          })}
          {/* <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option> */}
        </select>
        

      </div>
    );
  }
}
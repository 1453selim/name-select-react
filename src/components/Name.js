import React from 'react';
import {wishes} from "./wishes"

export class Name extends React.Component {
  render() {
    let name = this.props.name


    return (
      <div>
        <h1>Hey, my name is {name} </h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name} </h2>
        <p>{wishes[Math.floor(Math.random()*wishes.length)]} </p>
      </div>
    );
  }
}
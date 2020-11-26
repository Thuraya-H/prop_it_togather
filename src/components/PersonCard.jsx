import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            numAge : this.props.age
        } 
    } 
    increase_age = () => {
        this.setState({numAge: this.state.numAge + 1});
    }
    render() {
    var {first_name, last_name, hair_color} = this.props;
        return (
    <div className="m-3 p-4 border">
        <h1>{last_name}, {first_name}</h1>
        <p>Age: {this.state.numAge}</p>
        <p>Hair Color: {hair_color}</p>
        <button className="btn btn-outline-info" onClick={this.increase_age}>Birthday Button for {first_name} {last_name}</button>
    </div>
    )}
}
    
export default PersonCard;
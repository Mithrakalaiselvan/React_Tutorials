import React from 'react';

class App3 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:'Initial State...'
		}
		this.updateState=this.updateState.bind(this);
	}
    updateState(){
    	this.setState({data:"Updated State..."})
    }

	render(){
		return(
			<div>
			   <button onClick={this.updateState}>Update</button>
			    <h4>{this.state.data}</h4>
			</div>
			)
	}
}

export default App3;
import React from 'react';

class RandColor extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			color:props.color,
			random:false
		};
		this.onChangeColor = this.onChangeColor.bind(this);
	}
	onChangeColor(event){
		if(this.state.random){
			this.setState({
				color: this.props.color,
				random: false
			})
		}else{
			this.setState({
				color: "blue",
				random: true
			})
		}
	}
	render(){
		return(
			<div>
                <button style={{color:this.state.color}} 
                onClick={this.onChangeColor}>Change color!!</button>
            </div>
			);
	}
}

export default RandColor;

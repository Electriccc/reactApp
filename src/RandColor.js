import React from 'react';

class RandColor extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:"Change color!!",
			color:props.color,
			random:false
		};
		this.onChangeColor = this.onChangeColor.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
	fetch('http://www.colr.org/json/color/random')
    	.then((response) => response.json())
    	.then((responseJson) => {
    		this.randColor = "#" + responseJson.new_color;
      		console.log(responseJson);
    	})
    	.catch((error) => {
      		console.error(error);
   		});
  }

	onChangeColor(event){
		console.log("click")
		
		event.stopPropagation();
		if(this.state.random){
			this.setState({
				color: this.props.color,
				random: false
			})
			
		}else{
			this.setState({
				color: this.randColor,
				random: true
			})
			
		}
	}
	onChange(event){
		this.setState({name:event.target.value})
	}
	render(){
		return(
			<div>
				<div  className="changeColor">
	                <div style={{color:this.state.color}} 
	                onClick={this.onChangeColor}>{this.state.name}</div>
	            </div>

	            <div>
	       		 	<input id="name" value={this.state.name} onChange={this.onChange} />
	      		</div>
      		</div>
			);
	}
}

export default RandColor;

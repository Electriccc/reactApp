import React from 'react';
import axios from 'axios';

class RandColor extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			color:props.color,
			random:false
		};
		this.onChangeColor = this.onChangeColor.bind(this);
	}
	componentDidMount() {
    axios.get(`http://www.colr.org/json/color/random`)
      .then(res => {
        const color = res.data.new_color;
        console.log(color);
        this.setState({ randColor:"#" + color });
       
      });
  }

	onChangeColor(event){
		if(this.state.random){
			this.setState({
				color: this.props.color,
				random: false
			})
			
		}else{
			this.setState({
				color: this.state.randColor,
				random: true
			})
			
		}
	}
	render(){
		return(
			<div  className="changeColor">
                <div style={{color:this.state.color}} 
                onClick={this.onChangeColor}>Change color!!</div>
            </div>
			);
	}
}

export default RandColor;

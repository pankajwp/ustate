import React, {useState, useEffect, createContext} from 'react';

// creating context is done uusally in seperate file
const NameContext = createContext();

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			name: 'Main component'
		}
	}
	
	render(){
		return(
			<NameContext.Provider value = {this.state.name}>
				<Child />
			</NameContext.Provider>
		)
	}	
}

class Child extends React.Component{
	render(){
		return(
			<div>
				<GrandChild />
			</div>
		)
	}
}

class GrandChild extends React.Component{
	render(){
		return(
			<div>
				<Button />
			</div>
		)
	}
}

class Button extends React.Component{
	render(){
		return(
			<NameContext.Consumer>
			{
				name => <button>{name}</button>
			}
			</NameContext.Consumer>
		)
	}
}

export default App;

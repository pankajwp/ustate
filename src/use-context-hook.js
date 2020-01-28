import React, {useState, useEffect, createContext, useContext} from 'react';
const NameContext = createContext();

function App(){
	const [name, setName] = useState('Pankaj Kumar')
	
	return(
		<NameContext.Provider value={name}>
			<Child />
		</NameContext.Provider>
	)	
}

function Child(){
	return(
		<div className="child">
			<GrandChild />
		</div>
	)
}

function GrandChild(){
	return(
		<div className="grand-child">
			<Button />
		</div>
	)
}

function Button(){
	const name = useContext(NameContext);
	return (
		<div>
		{name}
		</div>
	)
	
}

export default App;

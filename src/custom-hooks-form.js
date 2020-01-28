import React, {useState} from 'react';

function App(){
	
	function useInput(){
		const [value, setValue] = useState('');
		
		function onChange(event){
			setValue(event.target.value);
		}
		
		return {value, onChange}
	}	
	
	// const {value: name, onChange: handleName} = useInput()
	// const {value: surname, onChange: handleSurname} = useInput()
	// const {value: age, onChange: handleAge} = useInput()
	
	return(	
		<div>
			<form>
				<input 
					type="text"
					placeholder="name"
					{...useInput}
				/>
				<input 
					type="text"
					placeholder="surname"
					{...useInput}
				/>
				<input 
					type="number"
					placeholder="age"
					{...useInput}
				/>				
			</form>
		</div>
	)
}

export default App;

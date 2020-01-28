import React, {useState} from 'react';

function App() {
	
	const [location, setLocation] = useState({city: '', country:''})
	
	const handleCity = (event) => {
		return setLocation( {
			...location, city: event.target.value
		})
	}
	
	const handleCountry = (event) => {
		setLocation({
			...location, country: event.target.value
		})
	}
	
  return (
    <div className="App">
     <form>
			<input 
				type="text"
				placeholder="city"
				onChange={handleCity}
				value={location.city}
				/>
			<input 
				type="text"
				placeholder="country"
				value={location.country}
				onChange={handleCountry}
				/>
		 </form>
		 <h2>The entered city is {location.city}, and country is {location.country}</h2>
    </div>
  );
}

export default App;

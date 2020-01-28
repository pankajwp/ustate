import React, {useState} from 'react';

function useCounter(startFrom){
	const [count, setCount] = useState(startFrom)
	
	const increase = () => setCount(count + 1)
	const decrease = () => setCount(count - 1)
	const reset = () => setCount(0)
	
	return {
		count, increase, decrease, reset
	}
}

function Display(props){
	const {count, increase, decrease, reset} = useCounter(props.start)
	return(
		<div>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
			<button onClick={reset}>Reset</button>
			<h1>{count}</h1>
		</div>
	)
}

function App(){	
	
	return (
			<div>
				<Display start={5}/>
				<Display start={10}/>
			</div>
	)
	
}

export default App;

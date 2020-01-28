import React, {useState, useEffect} from 'react';

function Counter(){
	const [count, setCount] = useState(0)	
	const [color, setColor] = useState('salmon')
	const plus = () => {
		// return setCount(count + 1)
		return setCount((preCount) => preCount + 1)
	}
	
	const minus = () => {
		return setCount((prevCount) => prevCount - 1)
	}
	
	const resetc = () => {
		return setCount((prevCount)=> 0)
	}
	
	useEffect(() => {
		console.log(`Useeffect called ${count}`)
		
		return () => {
			console.log(`removing everything with ${count}`)
		}
		
	}, [])	
	
	function handleColor(){
		const nextColor = color === 'salmon' ? 'gold' : 'salmon'
		setColor(nextColor)
	}
	
	return(
		<div>
			<button onClick={plus}>Plus</button>
			<button onClick={minus}>Minus</button>
			<button onClick={resetc}>Reset</button>
			<button onClick={handleColor}>Color change</button>
			<h2 style={{color}}>{count}</h2>
		</div>
	)
}

function App() {
	
	const [visible, setVisible] = useState(false)
	
	return(
		<div>
			<button onClick={() => setVisible(!visible)}>	Hide / Show Counter	</button>
			{visible && <Counter />}
		</div>
	)
	
}

export default App;

function App(){
	const [type, setType] = useState('');
	
	function handleClick(event){
		const {key, keyCode} = event;
		if(keyCode === 35 || (keyCode >= 35 && keyCode <= 90)){
			setType(`${type}${key}`)
		}
	}
	
	useEffect(() => {
		window.addEventListener('keydown', handleClick);
		
		return () => {
			window.removeEventListener('keydown', handleClick);
		}
	})
	
	return(	
		<div>
			<h1>hello</h1>
			<blockquote>
				{type}
			</blockquote>
		</div>
	)
}
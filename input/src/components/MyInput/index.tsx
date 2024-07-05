import { useRef, useState } from 'react'

export const MyInput = () => {
	const [inputValue, setInputValue] = useState('')
  	let storedValue = useRef('')
	
	
  const handleInputChange = (event: any) => {
	 setInputValue(event.target.value)
  }

  const handleButtonClick = (e: any) => {
    e.preventDefault()
    storedValue.current += inputValue
	console.log(storedValue.current)
	storedValue.current = ''
  }

	return(
		<div>
			<form> 
				<input onChange={handleInputChange} />
				<button  onClick={(e) => handleButtonClick(e)}>Console.log</button>
			</form>
		</div>
	)
}
import { useState } from 'react'

export const IsBigger = () => {
	const [inputValue, setInputValue] = useState<number>(0)
  	const [storedValue, setStoredValue] = useState<number>(0)
	const [isPositive, setIsPositive] = useState<boolean>(false)
	
	
  const handleInputChange = (event: any) => {
	 setInputValue(event.target.value)
  }

  const handleButtonClick = (e: any) => {
    e.preventDefault()
    setStoredValue(inputValue)
	if(storedValue >= 0) {
			if(storedValue >= 0) {
		setIsPositive(true)
	} else {
        setIsPositive(false)
    }
	}
  }
	
	return (
		<div>
			<form>
				<input onChange={handleInputChange}/>
				<button onClick={(e) => handleButtonClick(e)}>check</button>
			</form>

			{isPositive ? <div> positive </div> : <div> negative </div>}
		</div>
	)
}
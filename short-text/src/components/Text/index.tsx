import { PropsWithChildren, useState } from 'react'

export interface TextProps {
	text?: string
}

export const Text = (props: PropsWithChildren<TextProps>) => {
	const [isClicked, setIsClicked] = useState(false)
	
	const handleButtonClick = () => {
		setIsClicked(!isClicked)
	}

	return (
	<div>
		{isClicked ? 
		<div> {props.text}  <button onClick={() => (handleButtonClick())}>Show less</button> </div> 
		: 
		<div> {props.text?.split('.')[0] + '.'} <button onClick={() => (handleButtonClick())}>Show more</button></div>
		}
		
	</div>
	)
}
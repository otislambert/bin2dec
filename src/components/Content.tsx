import { useEffect, useState } from 'react';
import { validateInput } from '../utils/validate';

export default function Content() {
	const [input, setInput] = useState<string>();
	const [result, setResult] = useState<number>();
	const [errorMessage, setErrorMessage] = useState<string>();

	useEffect(() => {
		if (input) {
			const valid = validateInput(input);
			if (!valid) setErrorMessage('Non Binary Character Received');
		}
	}, [input]);

	return (
		<main data-testid='main-element'>
			<div className='centered'>
				{errorMessage && <div>{errorMessage}</div>}
				<div className='input-container' data-testid='input-container'>
					<input
						type='text'
						value={input}
						placeholder='Binary String'
						data-testid='input-node'
						onChange={(e) => setInput(e.target.value)}
					/>
					<button data-testid='convert-button'>Convert!</button>
				</div>
				{result && (
					<div className='results' data-testid='results-container'>
						<p>{result}</p>
					</div>
				)}
			</div>
		</main>
	);
}

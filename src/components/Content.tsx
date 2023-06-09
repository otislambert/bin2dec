import { useEffect, useState } from 'react';
import { validateInput } from '../utils/validate';
import { convertBinaryToString } from '../utils/convert';
import ErrorDialog from './ErrorDialog';

export default function Content() {
	// * state
	const [input, setInput] = useState<string>('');
	const [validInput, setValidInput] = useState<boolean>(false);
	const [result, setResult] = useState<number>();
	const [errorMessage, setErrorMessage] = useState<string>();

	// * functions
	const handleConvertClick = () => {
		if (validInput && input) {
			const decimal = convertBinaryToString(input);
			setResult(decimal);
		} else {
			setErrorMessage('Invalid input provided');
		}
	};

	// * effects
	useEffect(() => {
		if (input) {
			const valid = validateInput(input);
			setValidInput(valid);
			if (!valid) setErrorMessage('Only 1s and 0s are allowed');
			if (valid) setErrorMessage(undefined);
		} else {
			setValidInput(false);
		}
	}, [input]);

	return (
		<main data-testid='main-element'>
			<div className='centered'>
				<ErrorDialog message={errorMessage} />
				<div className='input-container' data-testid='input-container'>
					<input
						type='text'
						value={input}
						placeholder='Binary String'
						maxLength={8}
						data-testid='input-node'
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						data-testid='convert-button'
						onClick={handleConvertClick}
						disabled={!validInput}
					>
						Convert!
					</button>
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

export default function Content() {
	return (
		<main data-testid='main-element'>
			<div className='centered'>
				<div className='input-container' data-testid='input-container'>
					<input
						type='text'
						placeholder='Binary String'
						data-testid='input-node'
					/>
					<button data-testid='convert-button'>Convert!</button>
				</div>
				<div className='results' data-testid='results-container'>
					<p>Results go here...</p>
				</div>
			</div>
		</main>
	);
}

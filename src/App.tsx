export default function App() {
	return (
		<>
			<header className='header'>
				<h1>Bin 2 Dec Converter</h1>
			</header>
			<main>
				<div className='centered'>
					<div className='input'>
						<input type='text' />
						<button>Convert!</button>
					</div>
					<div className='results'>
						<p>Results go here...</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default function ErrorDialog({
	message,
}: {
	message: string | undefined;
}) {
	return (
		<div className='error-container'>
			{message && (
				<div data-testid='error-dialog' className='error-dialog'>
					<p>{message}</p>
				</div>
			)}
		</div>
	);
}

export default function ErrorDialog({
	message,
}: {
	message: string | undefined;
}) {
	if (message) {
		return (
			<div data-testid='error-dialog' className='error-dialog'>
				{message}
			</div>
		);
	}
}

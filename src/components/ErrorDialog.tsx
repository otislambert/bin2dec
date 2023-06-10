import { useEffect, useState } from 'react';

export default function ErrorDialog({
	message,
}: {
	message: string | undefined;
}) {
	// * state
	const [visible, setVisible] = useState<boolean>(false);

	// * effects
	useEffect(() => {
		if (message) {
			setVisible(true);
			setTimeout(() => {
				setVisible(false);
			}, 5000);
		} else {
			setVisible(false);
		}
	}, [message]);

	if (visible) {
		return (
			<div data-testid='error-dialog' className='error-dialog'>
				{message}
			</div>
		);
	}
}

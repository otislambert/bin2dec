import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Content from '../src/components/Content';
import React from 'react';

describe('Error Message', () => {
	it('is not initially rendered', () => {
		render(<Content />);
		const error = screen.queryByTestId('error-dialog');
		expect(error).toBe(null);
	});

	it('is rendered', async () => {
		render(<Content />);

		const input = screen.getByTestId('input-node');

		act(() => {
			fireEvent.change(input, { target: { value: 'abc' } });
		});

		const error = await screen.findByTestId('error-dialog');
		expect(error).toBeDefined();
	});

	it('has the correct classes', async () => {
		render(<Content />);

		const input = screen.getByTestId('input-node');

		act(() => {
			fireEvent.change(input, { target: { value: 'abc' } });
		});

		const error = await screen.findByTestId('error-dialog');
		expect(error.getAttribute('class')).toBe('error-dialog');
	});
});

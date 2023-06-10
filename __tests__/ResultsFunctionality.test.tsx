import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Content from '../src/components/Content';
import React from 'react';

describe('It Renders the Correct Results', () => {
	it('calculates and displays the correct result', async () => {
		render(<Content />);

		const input = screen.getByTestId('input-node');
		const button = screen.getByTestId('convert-button');

		act(() => {
			fireEvent.change(input, { target: { value: '010' } });
		});
		act(() => {
			fireEvent.click(button);
		});

		const results = await screen.findByTestId('results-container');
		expect(results.textContent).toBe('2');
	});

	it('ignores invalid input values', () => {
		render(<Content />);

		const input = screen.getByTestId('input-node');
		const button = screen.getByTestId('convert-button');

		act(() => {
			fireEvent.change(input, { target: { value: 'abc' } });
		});
		act(() => {
			fireEvent.click(button);
		});

		const results = screen.queryByTestId('results-container');
		expect(results).toBe(null);
	});

	it('updates multiple times', async () => {
		render(<Content />);

		const input = screen.getByTestId('input-node');
		const button = screen.getByTestId('convert-button');

		act(() => {
			fireEvent.change(input, { target: { value: '010' } });
		});
		act(() => {
			fireEvent.click(button);
		});

		const results = await screen.findByTestId('results-container');
		expect(results.textContent).toBe('2');

		act(() => {
			fireEvent.change(input, { target: { value: '10100101' } });
		});
		act(() => {
			fireEvent.click(button);
		});
		expect(results.textContent).toBe('165');
	});
});

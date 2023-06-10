import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Content from '../src/components/Content';
import React from 'react';

describe('Input Functionality', () => {
	it('responds to valid inputs', () => {
		render(<Content />);
		const input = screen.getByTestId('input-node');

		act(() => {
			fireEvent.change(input, { target: { value: '10' } });
		});

		expect(input.getAttribute('value')).toBe('10');
	});
});

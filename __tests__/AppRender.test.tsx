import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import React from 'react';

describe('App Rendering', () => {
	it('renders a title', () => {
		render(<App />);
		const title = screen.getByText('Bin 2 Dec Converter');
		expect(title).toBeDefined();
		expect(title.nodeName).toBe('H1');
	});
	it('renders an input', () => {
		render(<App />);
		const input = screen.getByPlaceholderText('bin');
		expect(input).toBeDefined();
		expect(input.nodeName).toBe('INPUT');
	});
	it('renders a convert button', () => {
		render(<App />);
		const button = screen.getByText('Convert!');
		expect(button).toBeDefined();
		expect(button.nodeName).toBe('BUTTON');
	});
});

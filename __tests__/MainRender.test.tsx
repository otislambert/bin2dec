import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from '../src/components/Main';
import React from 'react';

describe('Input Container', () => {
	it('is rendered', () => {
		render(<Main />);
		const el = screen.getByTestId('input-container');
		expect(el).toBeDefined();
	});
	it('has the correct node name', () => {
		render(<Main />);
		const el = screen.getByTestId('input-container');
		expect(el.nodeName).toBe('DIV');
	});
	it('has the correct class names', () => {
		render(<Main />);
		const el = screen.getByTestId('input-container');
		expect(el.getAttribute('class')).toBe('input-container');
	});
});

describe('Input Element', () => {
	it('is rendered', () => {
		render(<Main />);
		const input = screen.getByTestId('input-node');
		expect(input).toBeDefined();
	});
	it('has the correct node name', () => {
		render(<Main />);
		const input = screen.getByTestId('input-node');
		expect(input.nodeName).toBe('INPUT');
	});
	it('has the correct placeholder', () => {
		render(<Main />);
		const input = screen.getByTestId('input-node');
		expect(input.getAttribute('placeholder')).toBe('Binary String');
	});
});

describe('Convert Button', () => {
	it('is rendered', () => {
		render(<Main />);
		const button = screen.getByTestId('convert-button');
		expect(button).toBeDefined();
	});
	it('has the correct node name', () => {
		render(<Main />);
		const button = screen.getByTestId('convert-button');
		expect(button.nodeName).toBe('BUTTON');
	});
});

describe('Results Element', () => {
	it('is rendered', () => {
		render(<Main />);
		const results = screen.getByTestId('results-container');
		expect(results).toBeDefined();
	});
	it('has the correct node name', () => {
		render(<Main />);
		const results = screen.getByTestId('results-container');
		expect(results.nodeName).toBe('DIV');
	});
	it('has the correct class name', () => {
		render(<Main />);
		const results = screen.getByTestId('results-container');
		expect(results.getAttribute('class')).toBe('results');
	});
});

import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Content from '../src/components/Content';
import React from 'react';

describe('Input Container', () => {
	it('is rendered', () => {
		render(<Content />);
		const el = screen.getByTestId('input-container');
		expect(el).toBeDefined();
	});
	it('has the correct node name', () => {
		render(<Content />);
		const el = screen.getByTestId('input-container');
		expect(el.nodeName).toBe('DIV');
	});
	it('has the correct class names', () => {
		render(<Content />);
		const el = screen.getByTestId('input-container');
		expect(el.getAttribute('class')).toBe('input-container');
	});
});

describe('Input Element', () => {
	it('is rendered', () => {
		render(<Content />);
		const input = screen.getByTestId('input-node');
		expect(input).toBeDefined();
	});
	it('has the correct node name', () => {
		render(<Content />);
		const input = screen.getByTestId('input-node');
		expect(input.nodeName).toBe('INPUT');
	});
	it('has the correct placeholder', () => {
		render(<Content />);
		const input = screen.getByTestId('input-node');
		expect(input.getAttribute('placeholder')).toBe('Binary String');
	});
});

describe('Convert Button', () => {
	it('is rendered', () => {
		render(<Content />);
		const button = screen.getByTestId('convert-button');
		expect(button).toBeDefined();
	});
	it('has the correct node name', () => {
		render(<Content />);
		const button = screen.getByTestId('convert-button');
		expect(button.nodeName).toBe('BUTTON');
	});
	it('has the correct text content', () => {
		render(<Content />);
		const button = screen.getByTestId('convert-button');
		expect(button.textContent).toBe('Convert!');
	});
	it('is disabled by default', () => {
		render(<Content />);
		const button = screen.getByTestId('convert-button');
		expect(button.getAttribute('disabled')).toBe('');
	});
	it('is not disabled with a valid input entered', () => {
		render(<Content />);
		const input = screen.getByTestId('input-node');
		const button = screen.getByTestId('convert-button');

		act(() => {
			fireEvent.change(input, { target: { value: '10' } });
		});

		expect(button.getAttribute('disabled')).not.toBe('');
	});
});

describe('Initial Results Element', () => {
	it('is not initially rendered', () => {
		render(<Content />);
		const results = screen.queryByTestId('results-container');
		expect(results).toBe(null);
	});
});

describe('Results Element Rendering', () => {
	it('has the correct node name', () => {
		render(<Content />);
		const input = screen.getByTestId('input-node');
		const button = screen.getByTestId('convert-button');

		act(() => {
			fireEvent.change(input, { target: { value: '10' } });
		});
		act(() => {
			fireEvent.click(button);
		});

		const results = screen.getByTestId('results-container');
		expect(results.nodeName).toBe('DIV');
	});
	it('has the correct class name', () => {
		render(<Content />);
		const input = screen.getByTestId('input-node');
		const button = screen.getByTestId('convert-button');

		act(() => {
			fireEvent.change(input, { target: { value: '10' } });
		});
		act(() => {
			fireEvent.click(button);
		});

		const results = screen.getByTestId('results-container');
		expect(results.getAttribute('class')).toBe('results');
	});
});

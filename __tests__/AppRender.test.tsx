import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import React from 'react';

describe('App Render', () => {
	it('renders a header element', () => {
		render(<App />);
		const header = screen.getByTestId('header-element');
		expect(header).toBeDefined();
		expect(header.nodeName).toBe('HEADER');
	});
	it('renders a main element', () => {
		render(<App />);
		const main = screen.getByTestId('main-element');
		expect(main).toBeDefined();
		expect(main.nodeName).toBe('MAIN');
	});
});

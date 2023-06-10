import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import PageHeader from '../src/components/PageHeader';

describe('Page Header Rendering', () => {
	it('renders a title', () => {
		render(<PageHeader />);
		const title = screen.getByText('Bin 2 Dec Converter');
		expect(title).toBeDefined();
		expect(title.nodeName).toBe('H1');
	});

	it('renders a header element', () => {
		render(<PageHeader />);
		const head = screen.getByTestId('header-element');
		expect(head).toBeDefined();
		expect(head.nodeName).toBe('HEADER');
	});

	it('has the correct classes', () => {
		render(<PageHeader />);
		const head = screen.getByTestId('header-element');
		expect(head.getAttribute('class')).toBe('header');
	});
});

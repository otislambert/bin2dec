import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import React from 'react';

describe('App Rendering', () => {
	it('renders a title', () => {
		render(<App />);
		const title = screen.findByText('Bin 2 Dec Converter');
		expect(title).toBeDefined();
	});
});

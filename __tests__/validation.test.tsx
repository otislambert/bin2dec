import { describe, it, expect } from 'vitest';
import { validateInput } from '../src/utils/validate';

describe('valid input', () => {
	it('retuns true', () => {
		expect(validateInput('0110')).toBeTruthy();
		expect(validateInput('01')).toBeTruthy();
		expect(validateInput('01000101')).toBeTruthy();
	});
});

describe('invalid characters', () => {
	it('returns false when non binary numbers are received', () => {
		expect(validateInput('01101003')).toBeFalsy();
	});
	it('returns false when letters are passed', () => {
		expect(validateInput('010a')).toBeFalsy();
		expect(validateInput('hello')).toBeFalsy();
	});
	it('returns false when symbols are passed', () => {
		expect(validateInput('0110!')).toBeFalsy();
		expect(validateInput('!++')).toBeFalsy();
	});
	it('returns false when a space is passed', () => {
		expect(validateInput(' ')).toBeFalsy();
	});
});

describe('invalid lengths', () => {
	it('returns false when a string longer than 8 characters is passed', () => {
		expect(validateInput('01100101003000303001')).toBeFalsy();
	});
	it('returns false when an empty string is passed', () => {
		expect(validateInput('')).toBeFalsy();
	});
});

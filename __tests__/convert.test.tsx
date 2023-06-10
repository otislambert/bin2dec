import { convertBinaryToString } from '../src/utils/convert';
import { describe, it, expect } from 'vitest';

describe('convert binary to string', () => {
	it('returns the correct value', () => {
		expect(convertBinaryToString('11')).toBe(3);
		expect(convertBinaryToString('100')).toBe(4);
		expect(convertBinaryToString('1')).toBe(1);
		expect(convertBinaryToString('1111')).toBe(15);
		expect(convertBinaryToString('10100101')).toBe(165);
	});
	it('throws an error if an empty string is passed', () => {
		expect(() => convertBinaryToString('')).toThrowError(
			'Empty String Received'
		);
	});
	it('throws an error if a non numeric character is passed', () => {
		expect(() => convertBinaryToString('01a2')).toThrowError(
			'Non Binary Character Received'
		);
	});
	it('throws an error if a number other than 0 or 1 is passed', () => {
		expect(() => convertBinaryToString('02310')).toThrowError(
			'Non Binary Character Received'
		);
	});
	it('throws an error if a string longer than 8 characters is received', () => {
		expect(() =>
			convertBinaryToString('this is a long string. longer than 8 characters')
		).toThrowError('More than 8 Characters Received');
	});
	it('throws an error if no argument is passed', () => {
		// @ts-expect-error: testing
		expect(() => convertBinaryToString()).toThrowError();
	});
});

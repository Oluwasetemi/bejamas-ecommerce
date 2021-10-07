// import { expect } from '@jest/globals';
import formatMoney from '../formatMoney';

describe('test the format money function', () => {
	it('should format valid input', () => {
		expect(formatMoney(3567)).toBe('$35.67');
		expect(formatMoney(3000)).toBe('$30');
	});

	it('works with fractional dollars', () => {
		expect(formatMoney(1)).toEqual('$0.01');
		expect(formatMoney(10)).toEqual('$0.10');
		expect(formatMoney(9)).toEqual('$0.09');
		expect(formatMoney(40)).toEqual('$0.40');
	});

	it('leaves cents off for whole dollars', () => {
		expect(formatMoney(5000)).toEqual('$50');
		expect(formatMoney(100)).toEqual('$1');
		expect(formatMoney(50000000)).toEqual('$500,000');
	});

	it('works with whole and fractional dollars', () => {
		expect(formatMoney(5012)).toEqual('$50.12');
		expect(formatMoney(101)).toEqual('$1.01');
		expect(formatMoney(110)).toEqual('$1.10');
		expect(formatMoney(20893749823749823749)).toEqual(
			'$208,937,498,237,498,240.00',
		);
	});

	it('Result should contain $', () => {
		expect(formatMoney(9999)).toContain('$');
	});
	it('should return minimumFractionDigits of 2 characters', () => {
		let result = formatMoney(9999);
		expect(result.split('.')[1].length).toBe(2);
	});
});

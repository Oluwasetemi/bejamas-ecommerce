// import { expect } from '@jest/globals';
import formatMoney from '../formatMoney';

describe('test the format money function', () => {
	it('should format valid input', () => {
		expect(formatMoney(3567)).toBe('$35.67');
		expect(formatMoney(3000)).toBe('$30');
	});
	it('Result should contain $', () => {
		expect(formatMoney(9999)).toContain('$');
	});
	it('should return minimumFractionDigits of 2 characters', () => {
		let result = formatMoney(9999);
		expect(result.split('.')[1].length).toBe(2);
	});
});

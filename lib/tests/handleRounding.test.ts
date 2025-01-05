import { expect, test } from 'vitest';
import { handleRounding } from '../helpers';

// Diff = 1 year 1 month
const startDate = new Date('2021-12-15');
const currentDate = new Date('2023-1-15');

// Diff = 3 years 11 month
const startDate2 = new Date('2021-12-15');
const currentDate2 = new Date('2025-11-15');

// Diff = 3 years 3 months
const startDate3 = new Date('2021-12-15');
const currentDate3 = new Date('2025-3-16');

// Diff = 2 years 7 months
const startDate4 = new Date('2021-12-15');
const currentDate4 = new Date('2024-7-16');

test('rounds up to .5 or .0', () => {
  expect(handleRounding(startDate, currentDate)).toBe('1.0');
  expect(handleRounding(startDate2, currentDate2)).toBe('4.0');
  expect(handleRounding(startDate3, currentDate3)).toBe('3.5');
  expect(handleRounding(startDate4, currentDate4)).toBe('2.5');
});

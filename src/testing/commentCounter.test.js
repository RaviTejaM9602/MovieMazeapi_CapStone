import { getTotalComments } from '../modules/popUp.js';

test('Total Comments are Six', () => {
  expect(getTotalComments(1)).toBe(6);
});
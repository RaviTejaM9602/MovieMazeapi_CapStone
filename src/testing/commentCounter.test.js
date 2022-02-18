/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../modules/popUp.js';

describe('Testing comment counter', () => {
  const commentArr = [
    {
      id: 1,
      name: 'Ravi',
      comment: 'I loved it',
    },
    {
      id: 12,
      username: 'Emi',
      comment: 'Great movie ever',
    },
    {
      id: 19,
      username: 'John',
      comment: 'Not interesting',
    },
  ];
  expect(commentCounter(commentArr)).toBe(3);
});

test('Testing the number of comments is 3', () => {
  const arr = ['Amzing movie', 'Never watch such Movie', 'Very annoying'];
  expect(commentCounter(arr)).toBe(3);
});

import { regex } from '../src/utils/util';

test('Regex should match all the trailing spaces', () => {
  const matches = `Hello,  there are   some trailing spaces here!`.match(regex);
  expect(matches.length).toBe(2);
});

test('Regex should return null if there is no trailing space', () => {
  const matches = `Hello, no trailing spaces here!`.match(regex);
  expect(matches).toBe(null);
});

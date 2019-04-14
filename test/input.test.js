import { findTargets } from '../src/utils/inputs';
import register from '../src/listeners/register';
import { warning } from '../src/utils/util';

test('Inputs of type "search" should be matched', () => {
  document.body.innerHTML = '<input id="search" type="search"/>';
  const targets = findTargets();
  expect(targets.length).toEqual(1);
});

test('Inputs of type "text" should be matched', () => {
  document.body.innerHTML = '<input id="search" type="text"/>';
  const targets = findTargets();
  expect(targets.length).toEqual(1);
});

test('Input text color should be updated', () => {
  document.body.innerHTML = '<input id="search" type="text">';

  const targets = findTargets();

  expect(targets.length).toEqual(1);

  const input = targets[0];

  const content = 'Hello! some trailing    spaces here...';

  input.value = content;

  register(targets, false);

  const event = new Event('keyup');

  input.dispatchEvent(event);

  expect(input.style.color).toEqual(warning);
  expect(input.value).toEqual(content);
});

test('Input trailing spaces should be removed', () => {
  document.body.innerHTML = '<input id="search" type="search">';

  const targets = findTargets();

  expect(targets.length).toEqual(1);

  const input = targets[0];

  input.value = 'Hello! some trailing    spaces here...';

  register(targets, true);

  const event = new Event('blur');

  input.dispatchEvent(event);

  expect(input.value).toEqual('Hello! some trailing spaces here...');
});

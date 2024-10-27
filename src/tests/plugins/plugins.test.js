import { expect, test } from 'vitest';

test('example plugin', () => {
  const response = global.server.example;

  expect(response, 'Example could not be fetched').toStrictEqual('foobar');
});

import { afterAll, beforeAll, expect, test } from 'vitest';

test('GET /example', async () => {
  const response = await global.server.inject({
    method: 'GET',
    url: '/example',
  });

  expect(JSON.parse(response.payload)).toStrictEqual({
    hello: 'foobar',
  });
});

test('GET /test', async () => {
  const response = await global.server.inject({
    method: 'GET',
    url: '/test',
  });

  expect(JSON.parse(response.payload)).toStrictEqual({
    message: 'Hello, World!',
  });
});

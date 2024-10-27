import { afterAll, beforeAll } from 'vitest';

beforeAll(async () => {
  global.server = await require('../server');
});

afterAll(() => {
  global.server.close();
});

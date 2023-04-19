import { InstalledMiddleware } from './installed.middleware';

describe('InstalledMiddleware', () => {
  it('should be defined', () => {
    expect(new InstalledMiddleware()).toBeDefined();
  });
});

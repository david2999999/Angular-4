import {greet} from './greet';

describe('greet', () => {
  it('should include name in the message', function () {
    expect(greet('dav')).toContain('dav');
  });
});

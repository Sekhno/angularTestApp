import * as fromAuth from './auth.actions';

describe('signAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.signAuths().type).toBe('[Auth] Sign Auths');
  });
});

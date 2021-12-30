import * as fromAuth from './auth.actions';

describe('signAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.navigateToSignInAction().type).toBe('[Auth] Navigate To Sign In');
  });
});

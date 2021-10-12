import * as fromCounterAction from './counter-action.actions';

describe('onCounterActions', () => {
  it('should return an action', () => {
    expect(fromCounterAction.onCounterActions().type).toBe('[CounterAction] On CounterActions');
  });
});

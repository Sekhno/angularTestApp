import * as fromCounterAction from './counter-action.actions';

describe('increment', () => {
  it('should return an action', () => {
    expect(fromCounterAction.increment().type).toBe('[CounterAction] On CounterActions');
  });
});

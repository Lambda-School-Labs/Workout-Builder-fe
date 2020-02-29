import reducer, { initialState } from '../updates';

// TODO: temporary (can be removed after connection to backend)
describe('updates reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(initialState);
  });

  it('should increment when creating a workout', () => {
    expect(reducer(initialState, { type: 'UPDATE' }))
      .toBe(initialState + 1);
  });
});
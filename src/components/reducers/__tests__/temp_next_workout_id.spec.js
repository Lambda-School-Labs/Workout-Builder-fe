import reducer, { initialState } from '../temp_next_workout_id';

// TODO: temporary (can be removed after connection to backend)
describe('temp workout id reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(initialState);
  });

  it('should increment when creating a workout', () => {
    expect(reducer(initialState, { type: 'CYCLE_WORKOUT_ID' }))
      .toBe(initialState + 1);
  });
});
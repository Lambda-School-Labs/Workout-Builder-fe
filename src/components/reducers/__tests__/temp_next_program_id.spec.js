import reducer, { initialState } from '../temp_next_program_id';

// TODO: temporary (can be removed after connection to backend)
describe('temp program id reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(initialState);
  });

  it('should increment when creating a program', () => {
    expect(reducer(initialState, { type: 'CREATE_A_PROGRAM' }))
      .toBe(initialState + 1);
  });
});
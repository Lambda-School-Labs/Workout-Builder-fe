import reducer, { initialState } from '../new_program';

describe('new program reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should update new program data', () => {
    expect(reducer(initialState, {
      type: 'UPDATE_NEW_PROGRAM_DATA',
      payload: { name: 'Test Program' }
    })).toEqual({
      ...initialState,
      name: 'Test Program'
    });
  });
});
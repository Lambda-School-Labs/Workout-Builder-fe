import reducer from '../userID';

describe('userID reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  it('should set the user id', () => {
    expect(reducer(undefined, { type: 'SET_ID', payload: 69 }))
      .toBe(69);
  });
});
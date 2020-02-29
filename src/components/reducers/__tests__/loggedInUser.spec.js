import reducer from '../loggedInUser';

describe('loggedInUser reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      first_name: null,
      last_name: null,
      email: null
    });
  });

  it('should set logged in values', () => {
    const payload = {
      first_name: 'Woof',
      last_name: 'Woofington',
      email: 'growl@bark.bark'
    };
    expect(reducer([], {
      type: 'SET_LOGGED',
      payload
    })).toEqual(payload);
  });
});
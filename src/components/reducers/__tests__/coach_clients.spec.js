import reducer from '../coach_clients';

describe('clients reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle setting client data', () => {
    const clients = [ { name: 'Bunny' } ];
    expect(reducer([], {
      type: 'SET_CLIENT_DATA',
      payload: clients
    })).toEqual(clients);
  });
});
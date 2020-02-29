import reducer from '../coach_programs';

describe('programs reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should set program data', () => {
    const programs = [{ name: 'program 1' }];
    expect(reducer([], {
      type: 'SET_PROGRAM_DATA',
      payload: programs
    })).toEqual(programs);
  });

  it('should create an program', () => {
    expect(reducer([], {
      type: 'CREATE_A_PROGRAM',
      payload: { name: 'program 1' }
    })).toEqual([
      { name: 'program 1' }
    ]);
  });

  it('should edit an program', () => {
    expect(reducer([
      { id: 1, name: 'program 1' },
      { id: 2, name: 'program 2' }
    ], {
      type: 'UPDATE_A_PROGRAM',
      payload: { id: 2, name: 'best program' }
    })).toEqual([
      { id: 1, name: 'program 1' },
      { id: 2, name: 'best program' }
    ]);
  });

  it('should delete an program', () => {
    expect(reducer([
      { id: 1, name: 'program 1' },
      { id: 2, name: 'program 2' }
    ], {
      type: 'DELETE_A_PROGRAM',
      payload: 1
    })).toEqual([
      { id: 2, name: 'program 2' }
    ]);
  });
});
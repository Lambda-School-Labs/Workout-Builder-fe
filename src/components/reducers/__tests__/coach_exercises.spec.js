import reducer from '../coach_exercises';

describe('exercises reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should set exercise data', () => {
    const exercises = [{ name: 'running' }];
    expect(reducer([], {
      type: 'SET_EXERCISE_DATA',
      payload: exercises
    })).toEqual(exercises);
  });

  it('should create an exercise', () => {
    expect(reducer([], {
      type: 'CREATE_AN_EXERCISE',
      payload: { name: 'running' }
    })).toEqual([
      { name: 'running' }
    ]);
  });

  it('should edit an exercise', () => {
    expect(reducer([
      { id: 1, name: 'running' },
      { id: 2, name: 'walking' }
    ], {
      type: 'EDIT_EXERCISE',
      payload: { id: 2, name: 'shagging' }
    })).toEqual([
      { id: 1, name: 'running' },
      { id: 2, name: 'shagging' }
    ]);
  });

  it('should delete an exercise', () => {
    expect(reducer([
      { id: 1, name: 'running' },
      { id: 2, name: 'walking' }
    ], {
      type: 'DELETE_EXERCISE',
      payload: 1
    })).toEqual([
      { id: 2, name: 'walking' }
    ]);
  });

  it('should duplicate an exercise', () => {
    expect(reducer([
      { id: 1, name: 'running' }
    ], {
      type: 'DUPLICATE_EXERCISE',
      payload: { id: 2, name: 'running' }
    })).toEqual([
      { id: 1, name: 'running' },
      { id: 2, name: 'running' }
    ]);
  });
});